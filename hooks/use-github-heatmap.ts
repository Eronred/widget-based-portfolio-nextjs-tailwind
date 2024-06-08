"use client"
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';

type HeatmapData = { date: string; count: number; };

const useGithubHeatmap = () => {
    const [data, setData] = useState<HeatmapData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchGithubEvents = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.github.com/users/eronred/events`);
            return response.data;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const generateHeatmapData = useCallback((events) => {
        const contributionTypes = ['PushEvent', 'CreateEvent', 'IssueCommentEvent', 'IssuesEvent'];
        const filteredEvents = events.filter(event => contributionTypes.includes(event.type));

        const eventCountByDate = filteredEvents.reduce((acc, event) => {
            const eventDate = new Date(event.created_at).toISOString().split('T')[0];
            acc[eventDate] = (acc[eventDate] || 0) + 1;
            return acc;
        }, {});

        return Array.from({ length: 28 }, (_, i) => {
            const day = new Date();
            day.setDate(day.getDate() - i);
            const dayString = day.toISOString().split('T')[0];
            return {
                date: dayString,
                count: eventCountByDate[dayString] || 0,
            };
        }).reverse();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const events = await fetchGithubEvents();
            if (events) {
                const heatmapData = generateHeatmapData(events);
                setData(heatmapData);
            }
        };
        fetchData();
    }, [fetchGithubEvents, generateHeatmapData]);

    return { data, loading, error };
};

export default useGithubHeatmap;
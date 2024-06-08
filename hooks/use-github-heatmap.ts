"use client"
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';

type HeatmapData = { date: string; count: number; };

const useGithubHeatmap = () => {
    const [data, setData] = useState<HeatmapData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null); // Define the error state type

    const fetchGithubEvents = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.github.com/users/eronred/events`);
            return response.data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error('An unknown error occurred'));
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const generateHeatmapData = useCallback((events) => {
        const contributionTypes = ['PushEvent', 'CreateEvent', 'IssueCommentEvent', 'IssuesEvent'];
        const filteredEvents = events.filter(event => contributionTypes.includes(event.type));

        const eventCountByDate = filteredEvents.reduce((acc: Record<string, number>, event: any) => { // Add typing for acc and event
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

"use client"
import { useEffect, useState } from "react";
import axios from 'axios';


const useGithubHeatmap = () => {
    const [data, setData] = useState<{ date: string; count: number; }[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://api.github.com/users/eronred/events`);
                const events = result.data;

                // Filter events for contributions
                const contributionTypes = ['PushEvent', 'CreateEvent', 'IssueCommentEvent', 'IssuesEvent'];
                const filteredEvents = events.filter(event => contributionTypes.includes(event.type));

                // Create a map to count events per day
                const eventCountByDate = filteredEvents.reduce((acc, event) => {
                    const eventDate = new Date(event.created_at).toISOString().split('T')[0];
                    acc[eventDate] = (acc[eventDate] || 0) + 1;
                    return acc;
                }, {});

                // Generate the last 40 days
                const heatmapData = Array.from({ length: 28 }, (_, i) => {
                    const day = new Date();
                    day.setDate(day.getDate() - i);
                    const dayString = day.toISOString().split('T')[0];
                    return {
                        date: dayString,
                        count: eventCountByDate[dayString] || 0,
                    };
                }).reverse();

                setData(heatmapData);
            } catch (error) {
                console.error("Error fetching GitHub events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
}

export default useGithubHeatmap;




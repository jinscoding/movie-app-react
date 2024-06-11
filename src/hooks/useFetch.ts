import { useState, useEffect } from "react";

export function useFetch<T>(url: string): { data: T | null, loading: boolean} {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result.data);
        };
        fetchData();
    }, [url]);

    return { data, loading };
}

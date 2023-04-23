import { useState, useEffect, useDebugValue } from "react";
import axios from 'axios';

function getDataSlowly(data) {
    for(let i = 0; i < 3000000000000; i++) {}
    return data;
}

const useFetch = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useDebugValue(data, d => getDataSlowly(d));

    useEffect(() => {
        setLoading(true);
        axios
            .get(url, options)
            .then(response => {
                setData(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setData(null);
            })
            .finally(() => setLoading(false));
    }, [url, options]);

    return [loading, error, data];
}

export default useFetch;
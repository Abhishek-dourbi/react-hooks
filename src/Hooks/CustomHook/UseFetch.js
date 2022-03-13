const { default: axios } = require("axios");
const { useState, useEffect } = require("react")

const useFetch = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
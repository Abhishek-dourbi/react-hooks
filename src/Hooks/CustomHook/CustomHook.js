import React from "react";
import useFetch from "./UseFetch";

const URL = "https://jsonplaceholder.typicode.com/comments";

const CustomHook = () => {
    const [loading, error, data] = useFetch(URL);

    if(loading) return <h1>Loading...</h1>

    return (
        <ul>
            {data?.slice(0, 10).map(ele => (
                <li>
                    {ele.email}
                </li>
            ))}
        </ul>
    )
};

export default CustomHook;
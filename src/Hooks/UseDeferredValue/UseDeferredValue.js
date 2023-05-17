import React, { useState } from "react";
import List from "./List";

const UseDeferredValue = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <List input={input} />
        </>
    )
};

export default UseDeferredValue;
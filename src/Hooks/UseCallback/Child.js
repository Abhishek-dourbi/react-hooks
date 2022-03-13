import React, { useEffect } from 'react';

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
    }, [returnComment])

    return <div>{returnComment("John")}</div>
};

export default Child;
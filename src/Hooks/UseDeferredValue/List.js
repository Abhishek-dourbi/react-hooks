import React, { useMemo, useDeferredValue, useEffect } from "react";

const LIST_SIZE = 20000;

const List = ({ input }) => {
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const l = [];
        for(let i = 0; i < LIST_SIZE; i++) {
            l.push(<div>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput]);

    // useEffect(() => {
    //     console.log(`Input: ${input}\ndeferredInput: ${deferredInput}`)
    // }, [input, deferredInput])

    return list;
}

export default List;
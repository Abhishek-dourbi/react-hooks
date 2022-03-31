import React, { useEffect, memo } from 'react';

const Child = memo(({
    counter
}) => {
    useEffect(() => {
        console.log('Child');
    })

    return (
        <h1>
            {counter}
        </h1>
    )
});

export default Child;
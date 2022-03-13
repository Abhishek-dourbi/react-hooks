import React, {useRef} from "react";

const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>John Doe</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
};

export default UseRef;
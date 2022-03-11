import React, {useState} from "react";

const UseState = () => {
    const [inputValue, setInputValue] = useState('');

    const changeText = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input placeholder="Write Something..." onChange={changeText} />
            {inputValue}
        </div>
    )
}

export default UseState;
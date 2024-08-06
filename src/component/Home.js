import React, { useState,useEffect } from 'react';

const Home = () => {
    const [inputVariable, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(inputVariable + 1);
    };

    const decrement = () => {
        setInputValue(inputVariable - 1);
    };

    const changeHolder = (e) => {
        setInputValue(Number(e.target.value));
    };

    const btnStyle = {
        border: "3px solid red",
        padding: 10,
        backgroundColor: "rgb(255, 208, 0)",
        margin: 10
    };
    useEffect(()=>
    {
        console.log("run")
    } ,[])

    return (
        <div>
            <input
                type="number"
                placeholder='Type something'
                style={{ padding: 10, border: "2px orange solid" }}
                value={inputVariable}
                onChange={changeHolder}
            />
            <button style={btnStyle} onClick={increment}>+</button>
            <button style={btnStyle} onClick={decrement}>-</button>
        </div>
    );
};

export default Home;
// we use usestate takay value change hty hi real time mai dikh jaye
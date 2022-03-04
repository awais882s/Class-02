import React, { useState } from 'react';
function Counter() {
    let counter = 0;
    // more powerfull  variable than just simple variable like
    const [counter2, setCounter] = useState(0)
    const [name, setName] = useState("AWAIS S")
    const [age, setAge] = useState(18)
    const [price, setPrice] = useState(203.023)
    const incrementHandler = () => {
        counter = counter + 1;
        setCounter(counter2 + 1);
        // alert("increment call " + " " + counter)
    }
    const decrementHandler = () => {
        counter = counter - 1;
        setCounter(counter2 - 1);

        // alert("decrement call " + " " + counter)
    }

    console.log("counter", counter);
    console.log("counter2 =>>", counter2);


    return (
        <div style={{ padding: 50 }}>
            Using Simple Variable
            <button onClick={decrementHandler}>-</button>
            <span style={{ padding: 20 }}> counter is : {counter} </span>
            <button onClick={incrementHandler}>+</button>
            <hr />
            Using React state
            <button onClick={decrementHandler}>-</button>
            <span style={{ padding: 20 }}> counter is : {counter2} </span>
            <button onClick={incrementHandler}>+</button>
        </div>
    );
}
export default Counter;

// state
// react will not render the components again if the variable value change
// state - condition - halat
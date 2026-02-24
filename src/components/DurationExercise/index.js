import React, { useState } from "react";


const Dur = () => {
    const [timer, setTimer] = useState(0); //setting up the variable counter, and the state setCounter

    const clickUp = () => {
        setCounter(counter + 1); //the state changes when the counter increments - similar process for decrements
    }
    const clickDown = () => {
        setCounter(counter => Math.max(counter - 1, 0)) //Math.max sets it so that if the counter is less than 0, it blocks it and resets it to 0
    }
    

    return (
        <div>
            <div className="top-nav">
                <i className="fa-solid fa-arrow-left"></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className="exercise-count">
                <h2>{counter}</h2>
                <button onClick={clickUp}><i className="fa-solid fa-arrow-up"></i></button> <button onClick={clickDown}><i className="fa-solid fa-arrow-down"></i></button>
            </div>
        </div>
    )
}

export default Dur;
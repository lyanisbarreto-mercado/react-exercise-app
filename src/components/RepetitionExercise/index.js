import React, { useState } from "react";


const Rep = () => {
    const [counter, setCounter] = useState(0); //setting up the variable counter, and the state setCounter

    const [sets,setSets] = useState(1); //with each set, it always starts at one

    function createSets() {
        if (counter > 5) { //for the prototype, there is a set number before the counter resets
        setSets(sets + 1);
        setCounter(1);
        }
    }

    const clickUp = () => {
        setCounter(counter + 1); //the state changes when the counter increments - similar process for decrements
        createSets(); 
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
            <img src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg" alt="A man doing pushups" className="exerciseImage"/>
            <div className="exercise-count">
                <h2 className="counter">{counter}</h2>
                <button onClick={clickUp}><i className="fa-solid fa-arrow-up"></i></button> <button onClick={clickDown}><i className="fa-solid fa-arrow-down"></i></button>

                
                <button>{sets}/3</button>
            </div>
        </div>
    )
}

export default Rep;
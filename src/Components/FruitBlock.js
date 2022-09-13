import React from "react";




function FruitBlock({fruitTitle, currentAmount, isDisabled}) {

    return (
        <>
            <h1>{fruitTitle}</h1>
            <button>+</button>

            <p>{currentAmount}</p>

            <button>-</button>

        </>
    )
}


export default FruitBlock
import React from "react";




function FruitBlock({fruitTitle, fruitCount, setFruitCount}) {

    return (
        <article>
            <h1>{fruitTitle}</h1>
            <button type="button"
                    onClick={() => setFruitCount(fruitCount + 1)}>
            +</button>

            <p>{fruitCount}</p>

            <button type="button"
                    disabled={fruitCount === 0}
                    onClick={() => setFruitCount(fruitCount - 1)}>
            -</button>

        </article>
    )
}


export default FruitBlock
import React, {useState} from 'react';
import './App.css';


function App() {
    const [fruitAmount, setFruitAmount] = React.useState(0);
    const [addProduct, toggleAddProduct] = React.useState('');
    const [removeProduct, toggleRemoveProduct] = React.useState('');
    const [resetButton, toggleResetButton] = React.useState('');

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article className="aardbeien">
                <h1>🍓 Aardbeien</h1>
                <button
                    type="button"
                    id="more-button"
                    className="more-button"
                    onClick={ () => toggleAddProduct(+1)}
                >
                    +
                </button>
                <div className="amountOfFruit">{fruitAmount}</div>
                <button
                    type="button"
                    id="less-button"
                    className="less-button"
                    onClick={() => toggleRemoveProduct(-1)}
                >
                    -
                </button>

            </article>

            {/*<article className="bananen">*/}
            {/*    <h1>🍌 Bananen</h1>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="more-button"*/}
            {/*        className="more-button"*/}
            {/*    >*/}
            {/*        +*/}
            {/*    </button>*/}
            {/*    <div className="amountOfFruit">0</div>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="less-button"*/}
            {/*        className="less-button"*/}
            {/*    >*/}
            {/*        -*/}
            {/*    </button>*/}
            {/*</article>*/}

            {/*<article className="appels">*/}
            {/*    <h1>🍏 Appels</h1>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="more-button"*/}
            {/*        className="more-button"*/}
            {/*    >*/}
            {/*        +*/}
            {/*    </button>*/}
            {/*    <div className="amountOfFruit">0</div>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="less-button"*/}
            {/*        className="less-button"*/}
            {/*    >*/}
            {/*        -*/}
            {/*    </button>*/}
            {/*</article>*/}

            {/*<article className="kiwis">*/}
            {/*    <h1>🥝 Kiwi's</h1>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="more-button"*/}
            {/*        className="more-button"*/}
            {/*    >*/}
            {/*        +*/}
            {/*    </button>*/}
            {/*    <div className="amountOfFruit">0</div>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        id="less-button"*/}
            {/*        className="less-button"*/}
            {/*    >*/}
            {/*        -*/}
            {/*    </button>*/}
            {/*</article>*/}

            <button
                className="reset-button"
            type="button"
            id="reset-button"
                onClick={() => toggleResetButton(0)}
            >
              Reset
            </button>

        </>
    );
}

export default App;

import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article className="aardbeien">
                <h1>🍓 Aardbeien</h1>
                <button
                    type="button"
                    id="more-button"
                    className="more-button"
                >
                    +
                </button>
                <div className="amountOfFruit">0</div>
                <button
                    type="button"
                    id="less-button"
                    className="less-button"
                >
                    -
                </button>

            </article>

            <article className="bananen">
                <h1>🍌 Bananen</h1>
                <button
                    type="button"
                    id="more-button"
                    className="more-button"
                >
                    +
                </button>
                <div className="amountOfFruit">0</div>
                <button
                    type="button"
                    id="less-button"
                    className="less-button"
                >
                    -
                </button>
            </article>

            <article className="appels">
                <h1>🍏 Appels</h1>
                <button
                    type="button"
                    id="more-button"
                    className="more-button"
                >
                    +
                </button>
                <div className="amountOfFruit">0</div>
                <button
                    type="button"
                    id="less-button"
                    className="less-button"
                >
                    -
                </button>
            </article>

            <article className="kiwis">
                <h1>🥝 Kiwi's</h1>
                <button
                    type="button"
                    id="more-button"
                    className="more-button"
                >
                    +
                </button>
                <div className="amountOfFruit">0</div>
                <button
                    type="button"
                    id="less-button"
                    className="less-button"
                >
                    -
                </button>
            </article>

        </>
    );
}

export default App;

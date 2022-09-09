import React, {useState} from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png';

//Label alleen nodig bij inputvelden en selecties
//htmlFor moet altijd hetzelfde zijn als de id
//name is gewoon voor de volledigheid


function App() {
    const [strawberries, setStrawberries] = React.useState(0);
    const [bananas, setBananas] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = React.useState("week");


    function resetFruit() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Voornaam: ${firstname},
        Achternaam: ${lastname},
        Leeftijd: ${age},
        Postcode: ${zipCode},
        Bezorgfrequentie: ${deliveryFrequency}
        `);
        console.log(`
        ${strawberries} aardbeien, 
        ${bananas} bananen, 
        ${apples} appels, 
        ${kiwis} kiwi's,
        `)
    }

    return (
        <>
            <img src={logo} alt="logo" width="400px"/>
            <article>
                <h1>🍓 Aardbeien</h1>
                <button
                    type="button"
                    onClick={() => setStrawberries(strawberries + 1)}>
                    +
                </button>
                <p className="amountOfFruit">{strawberries}</p>
                <button
                    type="button"
                    disabled={strawberries === 0}
                    onClick={() => setStrawberries(strawberries - 1)}>
                    -
                </button>

            </article>

            <article>
                <h1> 🍌 Bananen</h1>
                <button
                    type="button"
                    onClick={() => setBananas(bananas + 1)}>
                    +
                </button>
                <p>{bananas}</p>
                <button
                    type="button"
                    disabled={bananas === 0}
                    onClick={() => setBananas(bananas - 1)}>
                    -
                </button>
            </article>

            <article>
                <h1>🍏 Appels</h1>
                <button
                    type="button"
                    onClick={() => setApples(apples + 1)}>
                    +
                </button>
                <p>{apples}</p>
                <button
                    type="button"
                    disabled={apples === 0}
                    onClick={() => setApples(apples - 1)}>
                    -
                </button>

            </article>

            <article>
                <h1>🥝 Kiwis</h1>
                <button
                    type="button"
                    onClick={() => setKiwis(kiwis + 1)}>
                    +
                </button>
                <p>{kiwis}</p>
                <button
                    type="button"
                    disabled={kiwis === 0}
                    onClick={() => setKiwis(kiwis - 1)}>
                    -
                </button>

            </article>


            <button
                onClick={() => resetFruit()}
            >Reset
            </button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName-field">
                    Voornaam
                    <input
                        name="firstname"
                        id="firstName-field"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>

                <label htmlFor="lastName-field">
                    Achternaam
                    <input
                        name="lastname"
                        id="lastName-field"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="age-field">
                    Leeftijd
                    <input
                        name="age"
                        id="age-field"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>

                <label htmlFor="zipcode-field">
                    Postcode
                    <input
                        name="zipcode"
                        id="zipcode-field"
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
                <label htmlFor="delivery-field">
                    Bezorgfrequentie
                    <select
                        name="delivery"
                        id="delivery-field"
                        value={deliveryFrequency}
                        onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                    >
                        <option value="week">Iedere week</option>
                        <option value="om-de-week">Om de week</option>
                        <option value="maandelijks">Iedere maand</option>
                    </select>
                </label>

                <button
                    type="sumit"
                >Versturen
                </button>
            </form>


        </>
    );
}

export default App;

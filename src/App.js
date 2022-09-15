import './App.css';
import logo from './assets/screenshot-logo.png';
import FruitBlock from "./Components/FruitBlock";
import Questionfield from "./Components/Questionfield"
import React from 'react';
import ActionButton from "./Components/ActionButton";

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
    const [daytime, toggleDaytime] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);


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
        console.log(`
        Tijdstip: ${daytime},
        Opmerkingen: ${comment},
        Terms and conditions: ${checkedTerms}
        `)
    }

    return (
        <>
            <img src={logo} alt="logo" width="400px"/>
            <article>
                <FruitBlock
                    fruitTitle="🍓 Aardbeien"
                    fruitCount={strawberries}
                    setFruitCount={setStrawberries}

                />

            </article>

            <article>
                <FruitBlock
                    fruitTitle="🍌 Bananen"
                    fruitCount={bananas}
                    setFruitCount={setBananas}
                />
            </article>

            <article>
                <FruitBlock
                    fruitTitle="🍏 Appels"
                    fruitCount={apples}
                    setFruitCount={setApples}
                />
            </article>

            <article>
                <FruitBlock
                    fruitTitle="🥝 Kiwis"
                    fruitCount={kiwis}
                    setFruitCount={setKiwis}
                />
            </article>

            <ActionButton
                functionPlaceholder={resetFruit()}
                buttonText="Reset"
                />

            {/*<button*/}
            {/*    onClick={() => resetFruit()}*/}
            {/*>Reset*/}
            {/*</button>*/}

            <form onSubmit={handleSubmit}>

                <Questionfield
                    fieldID="firstName-field"
                    fieldTitle="Voornaam"
                    fieldType="text"
                    content={firstname}
                    setContent={setFirstName}
                />

                <Questionfield
                    fieldID="lastname"
                    fieldTitle="Achternaam"
                    fieldType="text"
                    content={lastname}
                    setContent={setLastName}
                />

                <Questionfield
                    fieldID="age"
                    fieldTitle="Leeftijd"
                    fieldType="number"
                    content={age}
                    setContent={setAge}
                />

                <Questionfield
                    fieldID="zipcode-field"
                    fieldTitle="Postcode"
                    content={zipCode}
                    setContent={setZipCode}
                />

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

                <label htmlFor="time-field">
                    <input
                        type="radio"
                        name="time-field"
                        value={daytime}
                        onChange={() => toggleDaytime(!daytime)}
                    />
                    Overdag
                    <input
                        type="radio"
                        name="time-field"
                        value={!daytime}
                        onChange={() => toggleDaytime(daytime)}
                    />
                    's Avonds
                </label>
                <label htmlFor="comment">
                    Opmerking
                    <textarea
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button
                    type="submit"
                    disabled={!checkedTerms}
                >Versturen
                </button>
            </form>


        </>
    );
}

export default App;

import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const [strawberryCounter, setStrawberryCounter] = React.useState(0);
  const [bananaCounter, setBananaCounter] = React.useState(0);
  const [appleCounter, setAppleCounter] = React.useState(0);
  const [kiwiCounter, setKiwiCounter] = React.useState(0);

  // const [checkedTerms, toggleCheckedTerms] = React.useState(false)

    // reset counter
    function resetCounters() {
        setStrawberryCounter(0)
        setBananaCounter(0)
        setAppleCounter(0)
        setKiwiCounter(0)
    }

  // react hook form
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
      <>
        <h1>Fruitmand bezorgservice</h1>
        <div className="strawberries-container">
            <h3 className="strawberries-item">🍓 Aardbeien</h3>

            <button
                className="strawberries-item"
                id="min-button"
                type="button"
                onClick={() => setStrawberryCounter(strawberryCounter - 1)}
            > -
            </button>
            <h3 className="strawberries-item">{strawberryCounter}</h3>
            <button
            className="strawberries-item"
            id="plus-button"
            type="button"
            onClick={() => setStrawberryCounter(strawberryCounter + 1)}
            > +
            </button>
        </div>
        <div className="bananas-container">
            <h3>🍌 Bananen</h3>
            <button
                id="min-button"
                type="button"
                onClick={() => setBananaCounter(bananaCounter - 1)}
            > -
            </button>
            <h3>{bananaCounter}</h3>
            <button
                id="plus-button"
                type="button"
                onClick={() => setBananaCounter(bananaCounter + 1)}
            > +
            </button>
        </div>
        <div className="apples-container">
            <h3>🍏 Appels</h3>
            <button
                id="min-button"
                type="button"
                onClick={() => setAppleCounter(appleCounter - 1)}
            > -
            </button>
            <h3>{appleCounter}</h3>
            <button
                id="plus-button"
                type="button"
                onClick={() => setAppleCounter(appleCounter + 1)}
            > +
            </button>
        </div>
        <div className="kiwis-container">
            <h3>🥝 Kiwi's</h3>
            <button
                id="min-button"
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter - 1)}
            > -
            </button>
            <h3>{kiwiCounter}</h3>
            <button
                id="plus-button"
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter + 1)}
            > +
            </button>
        </div>
        <div className="reset-container">
            <button
                id="reset-button"
                onClick={resetCounters}
            > Reset
            </button>
        </div>

        {/*het formulier    */}
        <div>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="persoonsgegevens">
                    <label> Voornaam
                        <input
                            type="text"
                            name="firstName"
                            placeholder=""
                            ref={register({ required: true})}
                        />
                    </label>
                    <label>Achternaam
                        <input
                            type="text"
                            name="lastName"
                            ref={register({ required: true})}
                        />
                        {errors.lastName && "Verplicht invullen"}
                    </label>
                    <label> Leeftijd
                        <input
                            type="text"
                            name="age"
                            ref={register({ required: true, min: 18})}
                        />
                        {errors.age && "Je moet minimaal 18 jaar zijn"}
                    </label>
                    <label> Postcode
                        <input
                            type="text"
                            name="zipcode"
                            ref={register(
                                { required: true})}
                        />
                    </label>
                    <label> Huisnummer
                        <input
                            type="text"
                            name="houseNumber"
                            ref={register(
                                { required: true})}
                        />
                    </label>
                </div>

                <div className="delivery">
                    <label>Bezorgfrequentie</label>
                    <label htmlFor="time">
                        <input
                            type="radio"
                            name="time"
                            id="everyWeek"
                            value="weekly"
                            ref={register({ required: true})}
                        />Iedere week
                    </label>
                    <label htmlFor="time">
                        <input
                            type="radio"
                            name="time"
                            value="every other week"
                            ref={register({ required: true})}
                        />Om de week
                    </label>
                    <label htmlFor="time">
                        <input
                            type="radio"
                            name="time"
                            value="every month"
                            ref={register({ required: true})}
                        />Iedere maand
                    </label>
                    <label htmlFor="time">
                        <input
                            type="radio"
                            name="time"
                            value="other"
                            ref={register({ required: true})}
                        />Anders
                    </label>
                </div>
                <p>Opmerking</p>
                <label htmlFor="comment-field">
                    <textarea
                        id="comment-field"
                        name="comment"
                        cols="50"
                        rows="5"
                        placeholder="Zijn er bijzonderheden die je wilt melden?"
                    >
                    </textarea>
                </label>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        // checked={checkedTerms}
                        // onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button
                    // disabled={!checkedTerms}
                    type="submit"
                    id="submit-button"
                >Verzend</button>
            </form>
        </div>
      </>
  );
}

export default App;

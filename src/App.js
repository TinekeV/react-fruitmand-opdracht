import React from 'react';
import './App.css';

function App() {
  const [strawberryCounter, setStrawberryCounter] = React.useState(0);
  const [bananaCounter, setBananaCounter] = React.useState(0);
  const [appleCounter, setAppleCounter] = React.useState(0);
  const [kiwiCounter, setKiwiCounter] = React.useState(0);

  // reset counter
  function resetCounters() {
      setStrawberryCounter(0)
      setBananaCounter(0)
      setAppleCounter(0)
      setKiwiCounter(0)
  }


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

        <div className="form-container">
            <form>
                <label> Voornaam
                    <input
                        type="text"
                        name="firstName"
                        placeholder=""
                    />
                </label>
                <label>Achternaam
                    <input
                        type="text"
                        name="lastName"
                    />
                </label>
                <label> Leeftijd
                    <input
                        type="number"
                        name="age"
                    />
                </label>
                <label> Postcode
                    <input
                        type="text"
                        name="zipcode"
                    />
                </label>
                <p>Bezorgfrequentie</p>
                <label htmlFor="time">
                    <input
                        type="radio"
                        name="time"
                        id="everyWeek"
                        value="weekly"
                    />Iedere week
                </label>
                <label htmlFor="time">
                    <input
                        type="radio"
                        name="time"
                        value=""
                    />Om de week
                </label>
                <label htmlFor="time">
                    <input
                        type="radio"
                        name="time"
                        value=""
                    />Iedere maand
                </label>
                <label htmlFor="time">
                    <input
                        type="radio"
                        name="time"
                        value=""
                    />Anders
                </label>
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
                <label>
                    <input type="checkbox"/>Ik ga akkoord met de voorwaarden
                </label>
                <button
                    type="submit"
                >Verzend</button>
            </form>
        </div>
      </>
  );
}

export default App;

import React from 'react';
import { useForm } from "react-hook-form";
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

  // react hook form
    const { register, handleSubmit, errors, watch } = useForm(
        {
            mode: 'onChange'
        }
    )
    const selectedOtherDelivery = watch('delivery')

    function onSubmit(data) {
        console.log(data)
        console.log(`Ik wil graag: ${strawberryCounter} aardbeien, ${bananaCounter} bananen, ${appleCounter} appels en ${kiwiCounter} kiwi's`)
    }

  return (
      <>
        <h1>Fruitmand bezorgservice</h1>
        <div className="strawberries-container">
            <h3>🍓 Aardbeien</h3>

            <button
                id="min-button"
                type="button"
                onClick={() => setStrawberryCounter(strawberryCounter - 1)}
            > -
            </button>
            <h3 className={strawberryCounter > 0 ? 'underline' : ''}>{strawberryCounter}</h3>
            <button
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
            <h3 className={bananaCounter > 0 ? 'underline' : ''}>{bananaCounter}</h3>
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
            <h3 className={appleCounter > 0 ? 'underline' : ''}>{appleCounter}</h3>
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
            <h3 className={kiwiCounter > 0 ? 'underline' : ''}>{kiwiCounter}</h3>
            <button
                id="plus-button"
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter + 1)}
            > +
            </button>
        </div>
        <div className="reset-container">
            <button
                type="button"
                id="reset-button"
                onClick={resetCounters}
            > Reset
            </button>
        </div>

        {/*het formulier    */}
        <h1>Bestelformulier</h1>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="personalData">
                    <label htmlFor="first-name-field">Voornaam
                        <input
                            type="text"
                            id="first-name-field"
                            name="firstName"
                            ref={register({ required: true})}
                        />
                        {errors.firstName && <span className="error-message">Verplicht invullen</span>}
                    </label>
                    <label htmlFor="last-name-field">Achternaam
                        <input
                            type="text"
                            id="last-name-field"
                            name="lastName"
                            ref={register({ required: true})}
                        />
                        {errors.lastName && <span className="error-message">Verplicht invullen</span>}
                    </label>
                    <label htmlFor="age-field"> Leeftijd
                        <input
                            type="text"
                            id="age-field"
                            name="age"
                            ref={register({ required: true, min: 18})}
                        />
                        {errors.age && <span className="error-message">Je moet minimaal 18 jaar zijn</span>}
                    </label>
                    <label htmlFor="zipcode-field"> Postcode
                        <input
                            type="text"
                            id="zipcode-field"
                            name="zipcode"
                            ref={register({ required: true, pattern: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i})}
                        />
                        {errors.zipcode && <span className="error-message">Vul volgens het juiste format in: 1234AA</span>}
                    </label>
                    <label htmlFor="house-number-field"> Huisnummer
                        <input
                            type="text"
                            id="house-number-field"
                            name="houseNumber"
                            ref={register(
                                { required: true})}
                        />
                        {errors.houseNumber && <span className="error-message">Verplicht invullen</span>}
                    </label>
                </div>

                <div className="deliveryTime">
                    <p>Bezorgfrequentie</p>
                    <label htmlFor="everyWeek">
                        <input
                            type="radio"
                            name="delivery"
                            id="everyWeek"
                            value="weekly"
                            ref={register({ required: true})}
                        />Iedere week
                    </label>
                    <label htmlFor="everyOtherWeek">
                        <input
                            type="radio"
                            name="delivery"
                            id="everyOtherWeek"
                            value="every other week"
                            ref={register({ required: true})}
                        />Om de week
                    </label>
                    <label htmlFor="everyMonth">
                        <input
                            type="radio"
                            name="delivery"
                            id="everyMonth"
                            value="every month"
                            ref={register({ required: true})}
                        />Iedere maand
                    </label>
                    <label htmlFor="other">
                        <input
                            type="radio"
                            name="delivery"
                            id="other"
                            value="other"
                            ref={register({ required: true})}
                        />Anders
                    </label>
                    {selectedOtherDelivery === 'other' && (
                        <input
                            type="text"
                            name='other-delivery-option'
                            placeholder="Vul hier je eigen voorgestelde bezorgfrequentie in"
                            ref={register({required: true})}/>
                    )}
                    {errors.delivery && <span className="error-message">Verplicht invullen</span>}
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
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button
                    type="submit"
                    id="submit-button"
                >Verzend</button>
            </form>
      </>
  );
}

export default App;

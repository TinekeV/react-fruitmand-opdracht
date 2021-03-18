import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <h3>🍓 Aardbeien</h3>

        <button
            type="button"
            onClick={counter - 1}
        > - </button>
        <h3>0</h3>
        <button
            type="button"
            onClick={counter + 1}
        > + </button>
      <h3>🍌 Bananen</h3>

        <button type="button"> - </button>
        <h3>0</h3>

        <button type="button"> + </button>
      <h3>🍏 Appels</h3>

        <button type="button"> - </button>
        <h3>0</h3>
        <button type="button"> + </button>

      <h3>🥝 Kiwi's</h3>
        <button type="button"> - </button>
        <h3>0</h3>
        <button type="button"> + </button>
    </>
  );
}

export default App;

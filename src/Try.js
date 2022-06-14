import React, { useEffect } from 'react';
import { useState } from "react";
import { useFetch } from './hooks/useFetch'
import { useCouter } from './hooks/useCounter';

import { PokemonCard } from "./componentes/Organismos/PokemonCard";
import './App.css';

function App() {
const {  counter, increment, decrement } = useCouter();
const [result, setResult] = useState([]);
const [poke, setPoke] = useState([]);
const [load, setLoad] = useState('true');
const arr = [];

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ counter }`)
  .then((response) => response.json())
  .then((data) => setResult(
  data.results.map((item) => {
  fetch(item.url)
  .then((response) => response.json())
  .then((allpokemon) => arr.push(allpokemon));
  setPoke(arr );
}),
));
}, []);
console.log(poke)

setTimeout(() => {
  setLoad(false);
}, 1000);
return (
<div className="app">
  <h1>Pokemedex</h1>

  <button className='btn btn-primary' onClick={ decrement }>
    anterior
  </button>
  <button className='btn btn-primary' onClick={ increment }>
    Siguiente
  </button>

  <div className='galeria'>
    { load ? (
    <p>Loading...</p>
    ) : (
    poke.map((img, i) => (
    <div id={img.id} key={img.id}>
      <PokemonCard variant={ img.types[0].type.name }
        img={ img.sprites.front_default }
        nombre={ img.name }
        tipo={ img.types[0].type.name}
        altura={ img.height }
        peso={ img.weight }
        >
      </PokemonCard>
    </div>
    ))
    )}
  </div>
</div>
);
}
export default App;
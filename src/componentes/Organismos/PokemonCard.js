import React from 'react'
import { Text } from '../Atomos/Text'
import { PokemonData } from '../Moleculas/PokemonData'
import "./pokemonCard.css"
import { Imagen } from '../Atomos/Imagen'

export const PokemonCard = ({img, nombre, tipo, altura, peso, variant}) => {
  return (
    <section className={`${variant}`}>
      <Text variant='title-2'> {nombre} </Text>
      <Imagen img={ img }></Imagen>
      <PokemonData tipo={ tipo } altura={ altura } peso={ peso }></PokemonData>
    </section>
  )
}

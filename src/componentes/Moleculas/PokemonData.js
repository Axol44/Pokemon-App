import React from 'react'
import { Text } from '../Atomos/Text'
import "./pokemonData.css"

export const PokemonData = ({tipo, altura, peso }) => {
  return (
    <section className='pokemonData'>
      <Text variant='title-3'> { `Tipo` } </Text>
      <Text variant='title-3'> { tipo }</Text>
      <Text variant='title-3'> { `Height` }</Text>
      <Text variant='title-3'> { `${altura} cm` } </Text>
      <Text variant='title-3'> { `Weight` }</Text>
      <Text variant='title-3'> { `${peso} cm` } </Text>
    </section>
  )
}

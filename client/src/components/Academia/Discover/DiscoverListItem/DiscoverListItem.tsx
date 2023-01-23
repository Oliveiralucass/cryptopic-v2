import React from 'react'
import { IArtigo } from '../../../../utils/interfaces'

export const DiscoverListItem = ({artigo}) => {
  return (
    <div>
      <h1>{artigo.title}</h1>
      <img src={require(`../../../../assets/coins/${artigo.image}`)} alt="" />
      <h1>{artigo.image}</h1>
      <h1>{artigo.date}</h1>
      <h1>{artigo.readTime}</h1>
    </div>
  )
}

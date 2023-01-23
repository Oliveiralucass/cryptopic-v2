import React from 'react'
import { SectionBannerStyled } from './SectionBanner.styled'

export const SectionBanner = ({titulo, subtitulo}) => {
  return (
   <SectionBannerStyled>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
   </SectionBannerStyled> 
  )
}

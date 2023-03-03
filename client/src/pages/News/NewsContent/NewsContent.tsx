import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'
import { NoticiasNavbar } from '../../../components/Noticias/NoticiasNavbar/NoticiasNavbar'
import { IExpedition } from '../../../utils/interfaces'
import newsDb from '../../../newsDb.json'
import { NewsContentStyled, NewsHeader } from './NewsContent.styled'
import { ColorLineStyled } from '../../../components/ColorLine/ColorLine.styled'
import { DetailButtonCustomColored } from '../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { DetailButton } from '../../../components/Buttons/DetailButton/DetailButton'
import { NotFind } from '../../NotFind/NotFind'
import ReactHtmlParser  from 'html-react-parser'
import { Footer } from '../../../components/Footer/Footer'
import { NoticiasElement } from '../../../components/Noticias/NoticiasElement/NoticiasElement'

export const NewsContent = () => {

  return (
    <>
      <Header />
      <AdSection /> 
      <NoticiasNavbar />
      <NoticiasElement />
      <Footer />
    </>
  ) 
}

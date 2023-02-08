import React from 'react'
import { Link } from 'react-router-dom'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { CoinsStatsCardsStyled, CoinStatsCardsHeaderStyled } from './CoinsStatsCard.styled'

interface ICoinsStatsCard {
    title: string,
    url?: string
    content: string
}

export const CoinsStatsCard = ({title, url, content}: ICoinsStatsCard)  =>  {
  return (
    <CoinsStatsCardsStyled>
        <CoinStatsCardsHeaderStyled>
            <strong>{title}</strong>
            {url && <Link to={url}><DetailButtonColored texto={'PIC Academia'}/></Link>}
        </CoinStatsCardsHeaderStyled>

        <div>
            <p>{content}</p>
        </div>
    </CoinsStatsCardsStyled>
  )
}

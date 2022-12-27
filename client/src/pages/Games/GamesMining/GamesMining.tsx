import React from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { GamesNavbar } from '../../../components/Games/GamesNavbar/GamesNavbar'
import { Header } from '../../../components/Header/Header'
import { MinerCard } from '../../../components/MinerCard/MinerCard'
import { GamesMiningStyled } from './GamesMining.styled'

export const GamesMining = () => {
  return (
    <>
      <Header />
      <AdSection />
      <GamesNavbar />
      <GamesMiningStyled>
        <MinerCard />
      </GamesMiningStyled>
    </>
  )
}

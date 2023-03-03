import React from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'
import { MinerCard } from '../../../components/MinerCard/MinerCard'

export const Home = () => {
  
  return (
    <>
    <Header />
    <AdSection />

    <section>

    <div style={{ display: 'flex', justifyContent: 'center', margin:'20px 0'}}>
      <MinerCard />
    </div>
    </section>
    
    <Footer />
    </>
  )
}

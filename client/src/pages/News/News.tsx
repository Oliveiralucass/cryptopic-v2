import React, { useContext, useEffect } from 'react'
import { AdSection } from '../../components/AdSection/AdSection'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { NoticiasNavbar } from '../../components/Noticias/NoticiasNavbar/NoticiasNavbar'
import { UserContext } from '../../contexts/UserContext/UserContext'

export const News = () => {

  const { userTestApi } = useContext(UserContext)

  useEffect(() => {
    userTestApi()
  })

  return (
   <>
    <Header />
    <AdSection />
    <NoticiasNavbar />
    <Footer />
   </>
  )
}

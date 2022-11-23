import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Academy } from './pages/Academy/Academy/Academy'
import { Glossary } from './pages/Academy/Glossary/Glossary'
import { Coins } from './pages/Cryptocurrencies/Coins/Coins'
import { Home } from './pages/Home/Home/Home'
import { News } from './pages/News/News/News'
import { NotFind } from './pages/NotFind/NotFind'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/coins' element={<Coins />} />

        <Route path='/academy'>
          <Route index element={<Academy />} />
          <Route path='/academy/glossary' element={<Glossary />} />
        </Route>

        <Route path='/news'>
          <Route index element={<News />} />
        </Route>

        <Route path='*' element={<NotFind />} />
      </Routes>
    </BrowserRouter>
  )
}
  
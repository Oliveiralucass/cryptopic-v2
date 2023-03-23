import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CoinGeckoProvider } from './contexts/CoinGeckoContext/CoinGeckoContext'
import { GlobalProvider } from './contexts/GlobalContext/GlobalContext'
import { MiningProvider } from './contexts/MiningContext/MiningContext'
import { UserProvider } from './contexts/UserContext/UserContext'
import { Academy } from './pages/Academy/Academy/Academy'
import { Discover } from './pages/Academy/Discover/Discover'
import { DiscoverContent } from './pages/Academy/Discover/DiscoverContent/DiscoverContent'
import { Expedition } from './pages/Academy/Expedition/Expedition'
import { ExpeditionContent } from './pages/Academy/Expedition/ExpeditionContent/ExpeditionContent'
import { Glossary } from './pages/Academy/Glossary/Glossary'
import { GlossaryContent } from './pages/Academy/Glossary/GlossaryContent/GlossaryContent'
import { Guides } from './pages/Academy/Guides/Guides'
import { GuidesCategories } from './pages/Academy/Guides/GuidesCategories/GuidesCategories'
import { Trading } from './pages/Academy/Trading/Trading'
import { TradingContent } from './pages/Academy/Trading/TradingContent/TradingContent'
import { Coins } from './pages/Cryptocurrencies/Coins/Coins'
import { CoinsPage } from './pages/Cryptocurrencies/CoinsPage/CoinsPage'
import { Games } from './pages/Games/Games'
import { GamesCassino } from './pages/Games/GamesCassino/GamesCassino'
import { GamesMining } from './pages/Games/GamesMining/GamesMining'
import { Home } from './pages/Home/Home/Home'
import { News } from './pages/News/News'
import { NewsBlockchain } from './pages/News/NewsBlockchain/NewsBlockchain'
import { NewsContent } from './pages/News/NewsContent/NewsContent'
import { NewsEconomia } from './pages/News/NewsEconomia/NewsEconomia'
import { NewsTrading } from './pages/News/NewsTrading/NewsTrading'
import { NotFind } from './pages/NotFind/NotFind'
import { Privacidade } from './pages/other/Privacidade/Privacidade'
import { Servicos } from './pages/other/Servicos/Servicos'
import { SobreNos } from './pages/other/SobreNos/SobreNos'
import { Perfil } from './pages/Perfil/Perfil'
import { Post } from './pages/Post/Post'
import { Swap } from './pages/Swap/Swap'
import store from './store/store'
import { ScrollToTop } from './utils/ScrollToTop'

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <UserProvider>
    <MiningProvider>
    <CoinGeckoProvider>
    <GlobalProvider>
    <Provider store={store}>
      {/* PUBLIC ROUTES */}
      <ScrollToTop>
        <Routes>
          <Route path='*' element={<NotFind />} />
          <Route path='/' element={<Home />} />
          <Route path='/user/:user' element={<Perfil />} />
          <Route path='/sobre-nos'  element={<SobreNos /> } />
          <Route path='/servicos'  element={<Servicos /> } />
          <Route path='/privacidade'  element={<Privacidade /> } />
          <Route path='/user/:user/:post' element={<Post />} />
          

          <Route path='/criptomoedas'>
            <Route index element={<Coins />} />
            <Route path='/criptomoedas/:moeda' element={<CoinsPage />} />
          </Route>
        
          <Route path='/academia'>
            <Route index element={<Academy />} />

            <Route path='/academia/glossario'>
              <Route index element={<Glossary />} />
              <Route path='/academia/glossario/:glossary' element={<GlossaryContent />} />
            </Route>

            <Route path='/academia/guias'>
              <Route index element={<Guides />} />
              <Route path='/academia/guias/:categoria'  element={<GuidesCategories /> } />
            </Route>
            
            <Route path='/academia/expedicao'>
              <Route index element={<Expedition />} />
              <Route path='/academia/expedicao/:expedition' element={<ExpeditionContent /> } />
            </Route>

            <Route path='/academia/descubra'>
              <Route index element={<Discover />} />
              <Route path='/academia/descubra/:discover' element={<DiscoverContent /> } />
            </Route>
          </Route>
          
          <Route path='/noticias'>
            <Route index element={<News />} />
            <Route path='/noticias/blockchain'  element={<NewsBlockchain /> } />
            <Route path='/noticias/economia'  element={<NewsEconomia /> } />
            <Route path='/noticias/trading'  element={<NewsTrading /> } />
            <Route path='/noticias/noticia/:news'  element={<NewsContent /> } />
          </Route>
        
          <Route path='/swap'>
            <Route index element ={<Swap />} />
          </Route>
        
          <Route path='/games'>
            <Route index element ={<Games />} />
            <Route path='/games/mining'  element={<GamesMining /> } />
            <Route path='/games/cassino'  element={<GamesCassino /> } />
          </Route>
        </Routes>
      </ScrollToTop>
    </Provider>
    </GlobalProvider>
    </CoinGeckoProvider>
    </MiningProvider>
    </UserProvider>
    </BrowserRouter>
  )
}
  
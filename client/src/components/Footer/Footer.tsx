import React from 'react'
import { Link } from 'react-router-dom'
import { LogoWithImage } from '../LogoWiithImage/LogoWithImage'
import { FooterCenter, FooterContainer, FooterContent, FooterLeft, FooterRight, FooterRights, FooterStyled } from './Footer.styled'
export const Footer = () => {
  return (
  <>
    <FooterStyled>
      <FooterContainer>
        
        <FooterLeft>
          <LogoWithImage />
          
          <FooterContent>
            <p><Link to={'/sobre-nos'}>Sobre nós</Link></p>
            <p><Link to={'/servicos'}>Serviços</Link></p>
            <p><Link to={'/privacidade'}>Política de Privacidade</Link></p>
          </FooterContent>
        </FooterLeft>

        <FooterCenter>
          <h1>Conteúdos</h1>

          <FooterContent>
            <p><Link to={'/criptomoedas'}>Criptomoedas</Link></p>
            <p><Link to={'/academia'}>Academia</Link></p>
            <p><Link to={'/academia/glossario'}>Glossário</Link></p>
            <p><Link to={'/noticias'}>Notícias</Link></p>
            <p><Link to={'/games'}>Games</Link></p>
          </FooterContent>
        </FooterCenter>

        <FooterRight>
          <h1>Comunidade</h1>

          <FooterContent>
              <div className='social-content'>
                <a href="https://www.instagram.com/crypto_pic_/" target='_blank'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" fill="#F00073"/>
                    <path d="M16 9.2C18.2 9.2 18.5 9.2 19.4 9.2C20.2 9.2 20.6 9.4 20.9 9.5C21.3 9.7 21.6 9.8 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.8 21.6 9.6 21.3 9.5 20.9C9.4 20.6 9.3 20.2 9.2 19.4C9.2 18.5 9.2 18.3 9.2 16C9.2 13.7 9.2 13.5 9.2 12.6C9.2 11.8 9.4 11.4 9.5 11.1C9.7 10.7 9.8 10.4 10.1 10.1C10.4 9.8 10.7 9.6 11.1 9.5C11.4 9.4 11.8 9.3 12.6 9.2C13.5 9.2 13.8 9.2 16 9.2ZM16 7.7C13.7 7.7 13.5 7.7 12.6 7.7C11.7 7.7 11.1 7.9 10.6 8.1C10.1 8.3 9.6 8.6 9.1 9.1C8.6 9.6 8.4 10 8.1 10.6C7.9 11.1 7.8 11.7 7.7 12.6C7.7 13.5 7.7 13.8 7.7 16C7.7 18.3 7.7 18.5 7.7 19.4C7.7 20.3 7.9 20.9 8.1 21.4C8.3 21.9 8.6 22.4 9.1 22.9C9.6 23.4 10 23.6 10.6 23.9C11.1 24.1 11.7 24.2 12.6 24.3C13.5 24.3 13.8 24.3 16 24.3C18.2 24.3 18.5 24.3 19.4 24.3C20.3 24.3 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.2 20.3 24.3 19.4C24.3 18.5 24.3 18.2 24.3 16C24.3 13.8 24.3 13.5 24.3 12.6C24.3 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.6 22.9 9.1C22.4 8.6 22 8.4 21.4 8.1C20.9 7.9 20.3 7.8 19.4 7.7C18.5 7.7 18.3 7.7 16 7.7Z" fill="white"/>
                    <path d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="white"/>
                    <path d="M20.4 12.6C20.9523 12.6 21.4 12.1523 21.4 11.6C21.4 11.0477 20.9523 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1523 19.8477 12.6 20.4 12.6Z" fill="white"/>
                  </svg>

                  <p>Instagram</p>
                </a>
              </div>
            

            <div className='social-content'>
              <a href="https://twitter.com/Crypto_PIC_" target='_blank'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" fill="#1DA1F2"/>
                  <path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" fill="white"/>
                </svg>

                <p>Twitter</p>
              </a>
            </div>
          </FooterContent>
        
        </FooterRight>
      </FooterContainer>
    </FooterStyled>

    <FooterRights>
      <strong>Cryptopic, 2022 - &copy; Todos os direitos reservados</strong>
    </FooterRights>
  </>
  )
}

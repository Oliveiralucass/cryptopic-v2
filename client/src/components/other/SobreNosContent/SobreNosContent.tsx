import React from 'react'
import { SobreNosContentStyled } from './SobreNosContent.styled'

export const SobreNosContent = () => {
  return (
    <SobreNosContentStyled>
    <div className="main-text">
        <h1 className="main-text-title">Sobre nós
        </h1>    
    </div>

    <article className="main-article">

        <p className="article-text"><i>"We're Perfectly Imperfect Children, all of us are on a a mission."</i>
        </p>

        <p className="article-text">Perfectly Imperfect Children (PIC) Project, nasce da idéia de oferecer um ambiente onde pessoas com interesses em comum, possam compartilhar esses interesses e aprender cada vez mais.
        </p>

        <p className="article-text">Nosso objetivo principal é disseminar conhecimento de forma acessível sobre assuntos diversos, além de construir uma comunidade em volta de cada assunto unindo entusiastas de respectivos conteúdos e oferencendo informações para os nosso usuários.</p>
        
        <h2 className="article-header">Crypto PIC</h2>           
        
        <p className="article-text">Servindo como o braço incial do PIC Project, Crypto PIC é a divisão de criptomoedas da Perfectly Imperfect Children, nela disponibilizamos informações direcionadas, mas não limitadas, à Criptomoedas, o que elas são? Como funcionam? dentre outros assuntos, são abordados em nosso site. </p>                    
        
        <p className="article-text">Divulgamos também notícias sobre o que está acontecendo no mundo das critpomoedas sempre com teor educativo e informativo, nunca fazendo campanha a favor ou contra algum produto, serviço ou índividuo.</p>    

        <p className="article-text">Compartilhamos com nossos usuários análises sobre o mercado de criptomoedas, que devem ser levadas apenas com cunho educativo e informativos. Nenhum conteúdo dentro de Crypto PIC deve ser levado como recomendação de investimento.</p>               
        
    </article>
    </SobreNosContentStyled>
  )
}

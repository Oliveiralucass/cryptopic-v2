import React from 'react'
import { ServicosContentStyled } from './ServicosContent.styled'

export const ServicosContent = () => {

  return (
    <ServicosContentStyled>
    <div className="main-text">
        <h1 className="main-text-title">Serviços
        </h1>    
    </div>

    <article className="main-article">
        <p className="article-text">Crypto PIC disponibiliza serviços informativos e educativos sobre conceitos financeiro e econômicos direcionados, mas não limitados, à Criptomoedas.
        </p>

        <h2 className="article-header">PIC Academy</h2>
        
        <p className="article-text">PIC Academy é uma sessão direcionada para ensinar o básico e o avançado sobre criptomoedas com conceitos econômicos e gerenciais. Nosso intuito é disseminar a cultura de criptomoedas ensinando entusiastas sobre o que elas são, como funcionam, quais as possibilidadae, dentre outras informações que possa agregar em sua jornada de aprendizada no mundo Crypto.</p>                 
        
        <h2 className="article-header">PIC Glossary</h2>                 
        
        <p className="article-text">Em criptomoedas existem diversos termos e palavras que não são comumente utilizadas no dia a dia, com o PIC Glossary, buscamos descomplicar essas palavras, mostrando seus significados, origens, e/ou forma de se utilizar. Aprender sobre Criptomoedas é explorar um mundo novo, e é preciso aprender a falar sua língua nativa.</p>                 
        
        <h2 className="article-header">PIC Notícias</h2>              
        
        <p className="article-text">Disponibilizamos informativos e notícias sobre o que está acontecendo no mundo das Criptomoedas, notícias em nosso site são geralmente, mas não obrigatóriamente, direcionadas a criptomoedas ou qualquer assunto que tenha relação ou impacto no mercado de criptomoedas. As notícias presentes em nosso site são 100% com o intuito de informar, e não são inviézadas ou direcionadas para um convencimento, denegrimento ou campanha de algum produto, serviço ou índividuo.</p>
        
        <p className="article-text"><b>PIC Trading News</b></p>
        <p className="article-text">Disponibilizamos análises sobre a movimentação diária dos preços de algumas criptomoedas, essa análise é com o objetivo de informar e educar nossos usuários sobre conceitos do mercado de renda volátil, análise técnica, ou fundamentalista.</p>                 
                            
        <p className="article-text"><b>Nenhuma de nossas análises devem ser levadas em hipótese alguma como recomedação de investimento.</b></p>                    
        
        <h2 className="article-header">PIC Criptomoedas</h2>                    
        <p className="article-text">Seção direcionada ao acompanhemnto do mercado de criptomoedas com informações de preços e outros indicadores úteis para os investidores. Disponibilizamos links externos para os sites dos projetos, suas redes sociais e contratos dentro de suas respectivas Blockchains. A Crypto Pic apesar de seus esforços para manter todos os conteúdos e links úteis atualizados, não se responsabiliza por eventuais links ultrapassados, "quebrados" ou descontinuados</p>

        <p className="article-text">Esses links direcionam o usuário para sites externos na qual como consta em nossa página de <a href="./politica-de-privacidade.html">Políticas de Privacidade</a>, não possuímos relação ou responsabilidade com o conteúdo externo.</p>
    </article>
    </ServicosContentStyled>
  )
}

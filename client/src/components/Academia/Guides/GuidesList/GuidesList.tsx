import React, { useContext } from 'react'
import { GuidesListStyled } from './GuidesList.styled'
import glossarioDb from '../../../../glossarioDb.json'
import expeditionDb from '../../../../expeditionDb.json'
import discoverDB from '../../../../discoverDb.json'
import { IAllContents } from '../../../../utils/interfaces'
import { Link } from 'react-router-dom'
import { ContentCard } from '../../../Cards/ContentCard/ContentCard'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'

export const GuidesList = () => {

    const categoriesArray = ['bitcoin', 'blockchain', 'business', 'computadores', 'deFi', 'economia', 'ethereum', 'hacking', 'nft', 'termos', 'trading']

    const allContentsArray= [...glossarioDb, ...expeditionDb, ...discoverDB]

    console.log(allContentsArray);
    
    const { capitalizeText } = useContext(GlobalContext)


  return (
    <GuidesListStyled>
        {categoriesArray && categoriesArray.map(categorie => {

            let contentsByCategories = allContentsArray.filter((content) => {
                return content.categories.includes(categorie)
            })

            let data = {
                title: `Guia ${capitalizeText(categorie)}`,
                image: 'CryptoPICLogo.png',
                url: `/academia/guias/${categorie}`,
                contentsCount: contentsByCategories.length,
                categories: [`${categorie}`]
            }

            console.log(data);
            
            return <ContentCard artigo={data} key={data.title}/>
        })}
    </GuidesListStyled>
  )
}

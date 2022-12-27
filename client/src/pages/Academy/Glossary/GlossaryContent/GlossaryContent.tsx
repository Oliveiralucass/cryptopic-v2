import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo } from '../../../../utils/interfaces'
import ReactHtmlParser  from 'html-react-parser';

export const GlossaryContent = () => {

    const { glossario } = useParams()
    const [ artigo, setArtigo ] = useState<IArtigo>()

    useEffect(() =>{
      const selectedArtigo = glossarioDb.filter((artigo) => {
        return artigo.title == glossario 
      })

      setArtigo(selectedArtigo[0])
    })


   var parser = new DOMParser()
   
       
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />

      <h1>conteudo do glossario</h1>

      <h1>{artigo?.title}</h1>
      {artigo && 
       ReactHtmlParser(artigo.content)
      }
  
      
    </>

   
  )
}

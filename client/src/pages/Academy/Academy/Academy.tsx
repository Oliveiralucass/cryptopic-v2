import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../components/AdSection/AdSection'
import { ContentCard } from '../../../components/Cards/ContentCard/ContentCard'
import { Header } from '../../../components/Header/Header'
import discoverDb from '../../../discoverDb.json'
import ReactHtmlParser  from 'html-react-parser';


export const Academy = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />

      {discoverDb[0].content.map((content, index) => <>
      {ReactHtmlParser(content)}
      
      <div>
        {(index + 1) % 4 == 0 ? <AdSection /> :  ''}
      </div>

      </>)}
    </>
  )
}

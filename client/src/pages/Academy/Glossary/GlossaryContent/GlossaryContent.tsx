import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import { IGlossary } from '../../../../utils/interfaces'
import ReactHtmlParser  from 'html-react-parser';
import { CategoriesDetails, ContentContainer, ContentDetails, GlossaryContentStyled, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './GlossaryContent.styled'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonColored } from '../../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { MoreContentButton } from '../../../../components/Buttons/MoreContentButton/MoreContentButton'
import { MoreContentCard } from '../../../../components/Cards/MoreContentCard/MoreContentCard'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getGlossaryContents } from '../../../../store/features/glossarySlice'
import { addGlossaryContent } from '../../../../store/features/claimSlice'
import { MainLoading } from '../../../../components/Loadings/MainLoading/MainLoading'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'
import { ClaimedButton } from '../../../../components/Buttons/ClaimButtons/ClaimedButton/ClaimedButton'
import { ClaimButton } from '../../../../components/Buttons/ClaimButtons/ClaimButton/ClaimButton'
import { GlossaryElement } from '../../../../components/Academia/Glossary/GlossaryElement/GlossaryElement'

export const GlossaryContent = () => {

  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.glossary)

  const { glossary } = useParams()
  const [ artigo, setArtigo ] = useState<IGlossary | null>(null)

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <GlossaryElement />
      <AdSection />
    </>   
  )
}

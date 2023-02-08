import React, { useEffect, useState } from 'react'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header' 
import ReactHtmlParser  from 'html-react-parser';
import { DiscoverContentStyled, DiscoverHeader } from './DiscoverContent.styled'
import { Link, useParams } from 'react-router-dom'
import { IDiscover } from '../../../../utils/interfaces'
import { NotFind } from '../../../NotFind/NotFind'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonCustomColored } from '../../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getDiscoverContents } from '../../../../store/features/discoverSlice'
import { DiscoverElement } from '../../../../components/Academia/Discover/DiscoverElement/DiscoverElement';

export const DiscoverContent = () => {

  return (
    <>
      <Header />
      <AdSection /> 
      <AcademiaNavbar />
      <DiscoverElement />
    </>
  )
}

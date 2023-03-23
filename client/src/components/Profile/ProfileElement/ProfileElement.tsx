import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getUserByUsername } from '../../../store/features/userSlice'
import { IUser } from '../../../utils/interfaces'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { ColorLineStyled } from '../../ColorLine/ColorLine.styled'
import { MainLoading } from '../../Loadings/MainLoading/MainLoading'
import { ProfileElementBody, ProfileElementHeader, ProfileElementHeaderBottom, ProfileElementHeaderBottomCoinCard, ProfileElementHeaderTop, ProfileElementHeaderTopLeft, ProfileElementHeaderTopLeftInfos, ProfileElementHeaderTopLeftStats, ProfileElementHeaderTopRight, ProfileElementStyled, ProfileElementTopRightContentCard } from './ProfileElement.styled'
import {TbArrowNarrowRight} from 'react-icons/tb'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { CoinPostCard } from '../../Coins/CoinPostCard/CoinPostCard'

export const ProfileElement = () => {

    const { user } = useParams()
  

    const dispatch = useAppDispatch()
    const { selectedUser } = useAppSelector(state => state.user)
  
    useEffect(() => {
      user && dispatch(getUserByUsername(user))

    }, [user])

    console.log(selectedUser)
     return selectedUser ? (
        <ProfileElementStyled>
            <ColorLineStyled color={'#2563eb'}/>

            <ProfileElementHeader>
                <ProfileElementHeaderTop>
                    <ProfileElementHeaderTopLeft>
                        <img src={require('../../../assets/coins/PICLogo.png')} alt="" />

                        <ProfileElementHeaderTopLeftInfos>
                            <h2>@{selectedUser.username}</h2>
                            
                            <DetailButtonColored texto={"Lvl " + selectedUser.level}/>
                        </ProfileElementHeaderTopLeftInfos>
                        

                        <ProfileElementHeaderTopLeftStats>
                            <p>Desde {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                            <p><strong>{selectedUser.impressions}</strong> Impressões</p>
                        </ProfileElementHeaderTopLeftStats>
                        
                    </ProfileElementHeaderTopLeft>

                    <ProfileElementHeaderTopRight>
                        <h2>Conteúdos concluídos:</h2>
                        <ProfileElementTopRightContentCard> 
                            <div>
                                <p>Descubra:</p>
                                <span>{selectedUser.contentsCompleted.discover.length} Concluídos</span>
                            </div>
                            
                            <TbArrowNarrowRight size={20}/>
                        </ProfileElementTopRightContentCard>

                        <ProfileElementTopRightContentCard> 
                            <div>
                                <p>Expedição:</p>
                                <span>{selectedUser.contentsCompleted.expedition.length} Concluídos</span>
                            </div>
                            
                            <TbArrowNarrowRight size={20}/>
                        </ProfileElementTopRightContentCard>

                        <ProfileElementTopRightContentCard> 
                            <div>
                                <p>Glossário:</p>
                                <span>{selectedUser.contentsCompleted.glossary.length} Concluídos</span>
                            </div>
                            
                            <TbArrowNarrowRight size={20}/>
                        </ProfileElementTopRightContentCard>
                    </ProfileElementHeaderTopRight>
                </ProfileElementHeaderTop>

                <DivisorStyled />

                <ProfileElementHeaderBottom>
                {selectedUser.profile.coinsLiked.map(coin => <Link to={`/${coin.url}`} key={coin.id}>
                        <ProfileElementHeaderBottomCoinCard> 
                            <img src={coin.image} alt="" />

                            <div>
                                <p>{coin.name}</p>
                            </div>
                        </ProfileElementHeaderBottomCoinCard>
                    </Link>
                )}
                </ProfileElementHeaderBottom>
            </ProfileElementHeader>

            <ProfileElementBody>
            {selectedUser.profile.posts.map(post => <CoinPostCard key={post._id}  comment={post}/>)}

            </ProfileElementBody>

        </ProfileElementStyled>
  ) : <MainLoading />
}

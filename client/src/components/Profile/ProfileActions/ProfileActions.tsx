import React from 'react'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { ProfileActionsBody, ProfileActionsHeader, ProfileActionsStyled } from './ProfileActions.styled'

export const ProfileActions = ({user, shouldShow, onRequestClose}) => {

    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.reload()
    }
  return shouldShow && (
        <ProfileActionsStyled onClick={e => e.stopPropagation()}>
            <div>
                <ProfileActionsHeader>
                    <img src={user.img} alt="" />

                    <div className='profile-action-informations'>
                        <h2>@{user.username}</h2>  
                        <div className='profile-action-stats'>
                            <DetailButtonColored texto={"Lvl " + user.level}/>

                            <div className='profile-action-balance'>
                                <img src={require('../../../assets/coins/PICLogo.png')} alt="" />
                                <p>{user.accountBalance}</p>
                            </div>
                        </div>
                    </div>
                    
                </ProfileActionsHeader>
                

                <DivisorStyled />
                <ProfileActionsBody>
                    <ul>
                        <li>Configurações</li>
                        <li className='exit-btn' onClick={() => handleLogout()}>Sair</li>
                    </ul>
                </ProfileActionsBody>
                
            </div>
        </ProfileActionsStyled>
  )
}

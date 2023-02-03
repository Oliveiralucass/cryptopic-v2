import React from 'react'
import { useAppSelector } from '../../hooks/useTypedSelectors'
import { ProfileInfoBalance, ProfileInfoImage, ProfileInfoLevel, ProfileInfosStyled, ProfileInfoUsername } from './ProfileInfos.styled'

export const ProfileInfos = () => {
    const { user } = useAppSelector((state) => state.auth)
    
  return user ? (
    <ProfileInfosStyled>
      <div>
        <ProfileInfoUsername>
          {user.username}
        </ProfileInfoUsername>

        <ProfileInfoLevel>
          <p>Level: <span>{user.level}</span></p>
          <span>{user.xp} / {user.xpToNextLevel} xp</span>
        </ProfileInfoLevel>

        <ProfileInfoBalance>
          <img src={require('../../assets/coins/PICLogo.png')} alt="" />
          <p>{user.accountBalance}</p>
        </ProfileInfoBalance>
      </div>

      <ProfileInfoImage>
        <img src={require('../../assets/coins/PICLogo.png')} alt="" />
      </ProfileInfoImage>
    </ProfileInfosStyled>
  ) : null
}


      

      
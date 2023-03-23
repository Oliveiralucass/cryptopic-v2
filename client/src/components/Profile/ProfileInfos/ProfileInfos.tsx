import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useTypedSelectors'
import { IUserInfos } from '../../../utils/interfaces'
import { ProfileActions } from '../ProfileActions/ProfileActions'
import { ProfileInfoBalance, ProfileInfoImage, ProfileInfoLevel, ProfileInfosStyled, ProfileInfoUsername } from './ProfileInfos.styled'

export const ProfileInfos = () => {
  const { user } = useAppSelector((state) => state.auth)
  const [ userInfos, setUserInfos ] = useState<IUserInfos | null>(null);

  const [ showActions, setShowActions ] = useState(false)

  useEffect(() => {
    setUserInfos(user)
    console.log('useeffect profile')
  }, [user]);
  

  console.log(user);
  
  return userInfos ? (
    <ProfileInfosStyled>
      <div>
        <ProfileInfoUsername>
          <Link to={`/user/${userInfos.username}`}>{userInfos.username}</Link>
        </ProfileInfoUsername>

        <ProfileInfoLevel>
          <p>Level: <span>{userInfos.level}</span></p>
          <span>{userInfos.xp} / {userInfos.xpToNextLevel} xp</span>
        </ProfileInfoLevel>

        <ProfileInfoBalance>
          <img src={require('../../../assets/coins/PICLogo.png')} alt="" />
          <p>{userInfos.accountBalance}</p>
        </ProfileInfoBalance>
      </div>

      <ProfileInfoImage onClick={() => setShowActions(!showActions)}>
        <img src={require('../../../assets/coins/PICLogo.png')} alt="" />
        {showActions && <ProfileActions user={user} shouldShow={showActions} onRequestClose={() => setShowActions(false)}/>}
      </ProfileInfoImage>
    </ProfileInfosStyled>
  ) : null
}


      

      
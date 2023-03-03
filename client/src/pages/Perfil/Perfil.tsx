import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AdSection } from '../../components/AdSection/AdSection'
import { Header } from '../../components/Header/Header'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import { getUserByUsername } from '../../store/features/userSlice'

export const Perfil = () => {
  
  const dispatch = useAppDispatch()
  const { selectedUser } = useAppSelector(state => state.user)

  const { user } = useParams()

  useEffect(() => {
    user && dispatch(getUserByUsername(user))
  }, [])

  console.log(selectedUser)
  return (
    <>
      <Header />
      <AdSection />
      <p>{user}</p>
    </>
  )
}

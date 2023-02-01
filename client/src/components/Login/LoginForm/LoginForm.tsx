import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../hooks/useTypedSelectors'
import { handleLogin } from '../../../store/features/authSlice'
import { ICreateAccount, ILogin } from '../../../utils/interfaces'
import { LogoWithImage } from '../../LogoWiithImage/LogoWithImage'
export const LoginForm = () => {

    const { register, handleSubmit } = useForm<ICreateAccount | ILogin>()

    
    const dispatch = useAppDispatch()
  return (
    <>
        
        <LogoWithImage />
        <label htmlFor="email">
            Email
            <input type="text" id='email' placeholder='Email'{...register('email')}/>
        </label>

        <label htmlFor="password">
            Senha
            <input type="text" id='password' placeholder='Senha'{...register('password')}/>
        </label>

        <input type="submit" value={'Entrar'} />
    </>
  )
}

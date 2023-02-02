import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { LoginBackground, LoginStyled, SignupStyled } from './Login.styled'
import  { useForm }  from 'react-hook-form'
import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { createAccount, handleLogin } from '../../store/features/authSlice'
import { ICreateAccount, ILogin } from '../../utils/interfaces'
import { LogoWithImage } from '../LogoWiithImage/LogoWithImage'
import { ProfileInfos } from '../ProfileInfos/ProfileInfos'

export const Login = ({shouldShow, onRequestClose}) => {

    const { register, handleSubmit } = useForm<ICreateAccount>()
    const [ pageType, setPageType ] = useState<string>('login')

    const dispatch = useAppDispatch()

    return shouldShow && (
    <>
        {pageType === 'login' ? 
        <LoginBackground onClick={onRequestClose}>
            <LoginStyled onClick={e => e.stopPropagation()} onSubmit={handleSubmit((data: ILogin) => dispatch(handleLogin(data)))}>
                <LogoWithImage />
                <label htmlFor="email">
                    Email
                    <input type="text" id='email' placeholder='Insira o E-mail'{...register('email')}/>
                </label>

                <label htmlFor="password">
                    Senha
                    <input type="text" id='password' placeholder='Insira sua senha'{...register('password')}/>
                </label>

                <input type="submit" value={'Entrar'} />

                <div className='separator'>
                    <hr />
                    <p>OU</p>
                    <hr />
                </div>
                
                <button onClick={() => setPageType('signup')}>Criar uma conta</button>
            </LoginStyled>
        </LoginBackground>
        :
        <LoginBackground onClick={onRequestClose}>
            <SignupStyled onClick={e => e.stopPropagation()} onSubmit={handleSubmit((data: ICreateAccount) => dispatch(createAccount(data)))}>

                <LogoWithImage />
                <label htmlFor="email">
                    Email
                    <input type="text" id='email' placeholder='Insira o E-mail'{...register('email')}/>
                </label>

                <label htmlFor="username">
                    Usuário
                    <input type="text" id='username' placeholder='Informe um Nome de Usuário'{...register('email')}/>
                </label>

                <label htmlFor="password">
                    Senha
                    <input type="text" id='password' placeholder='Insira sua senha'{...register('password')}/>
                </label>

                <input type="submit" value={'Cadastrar-se'} />

                <div className='separator'>
                    <hr />
                    <p>OU</p>
                    <hr />
                </div>
                <button onClick={() => setPageType('login')}>Fazer Login</button>
            </SignupStyled>
        </LoginBackground>}

        <ProfileInfos />
    </>
  )
}

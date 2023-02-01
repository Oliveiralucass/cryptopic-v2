import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { LoginStyled, SignupStyled } from './Login.styled'
import  { useForm }  from 'react-hook-form'
import { api } from '../../utils/api'
import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { createAccount, handleLogin } from '../../store/features/authSlice'
import { ICreateAccount, ILogin } from '../../utils/interfaces'
import { LoginForm } from '../../components/Login/LoginForm/LoginForm'
import { LogoWithImage } from '../../components/LogoWiithImage/LogoWithImage'

export const Login = () => {

    const { register, handleSubmit } = useForm<ICreateAccount>()
    const [ pageType, setPageType ] = useState<string>('login')

    const dispatch = useAppDispatch()

    return (
    <>
        <Header />
        {pageType === 'login' ? <LoginStyled onSubmit={handleSubmit((data: ILogin) => dispatch(handleLogin(data)))}>
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
            <div className='separator'>
                <hr />
                <p>OU</p>
                <hr />
            </div>
            <button onClick={() => setPageType('signup')}>Criar uma conta</button>
        </LoginStyled>
        :
        <SignupStyled onSubmit={handleSubmit((data: ICreateAccount) => dispatch(createAccount(data)))}>

            <LogoWithImage />
            <label htmlFor="email">
                Email
                <input type="text" id='email' placeholder='Email'{...register('email')}/>
            </label>

            <label htmlFor="username">
                Usuário
                <input type="text" id='username' placeholder='Usuário'{...register('email')}/>
            </label>

            <label htmlFor="password">
                Senha
                <input type="text" id='password' placeholder='Senha'{...register('password')}/>
            </label>

            <input type="submit" value={'Cadastrar-se'} />

            <div className='separator'>
                <hr />
                <p>OU</p>
                <hr />
            </div>
        <button onClick={() => setPageType('login')}>Fazer Login</button>
    </SignupStyled>}
    </>
  )
}

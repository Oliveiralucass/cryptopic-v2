import React, { useState } from 'react'
import { LoginBackground, LoginStyled, SignupStyled } from './Login.styled'
import  { useForm }  from 'react-hook-form'
import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { createAccount, handleLogin } from '../../store/features/authSlice'
import { ICreateAccount, ILogin } from '../../utils/interfaces'
import { LogoWithImage } from '../LogoWiithImage/LogoWithImage'
import { ProfileInfos } from '../Profile/ProfileInfos/ProfileInfos'

export const Login = ({shouldShow, onRequestClose}) => {

    const { register, handleSubmit } = useForm<ICreateAccount>()
    const [ pageType, setPageType ] = useState<string>('login')

    const dispatch = useAppDispatch()

    const registerAndLogin = async (data)  => {
        await dispatch(createAccount(data))
        
        let loginData = {
            email: data.email,
            password: data.password
        }

        await dispatch(handleLogin(loginData))
    }

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
                <SignupStyled onClick={e => e.stopPropagation()} onSubmit={handleSubmit((data: ICreateAccount) => registerAndLogin(data))}>
                <LogoWithImage />
                <label htmlFor="email">
                    Email
                    <input type="text" id='email' placeholder='Insira o E-mail'{...register('email')}/>
                </label>

                <label htmlFor="username">
                    Usuário
                    <input type="text" id='username' placeholder='Informe um Nome de Usuário'{...register('username')}/>
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

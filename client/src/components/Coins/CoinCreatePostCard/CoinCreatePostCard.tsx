import React, { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { CoinCreatePostCardBody, CoinCreatePostCardBodyHeader, CoinCreatePostCardBodyMessage, CoinCreatePostCardHeader, CoinCreatePostCardInteractions, CoinCreatePostCardInteractionsBlocked, CoinCreatePostCardStyled } from './CoinCreatePostCard.styled'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { createPost, getCoinById, ICreatePost } from '../../../store/features/coinSlice'
import { getLoggedUser } from '../../../store/features/authSlice'
export const CoinCreatePostCard = ({coin, user}) => {

    const { register, handleSubmit, reset } = useForm<ICreatePost>()
    const dispatch = useAppDispatch()
    const { selectedCoin } = useAppSelector(state => state.coin)
    const { token } = useAppSelector(state => state.auth)

    useEffect(() => {
        
    }, [selectedCoin])

    const handleClick = async(data) =>{
        await dispatch(createPost({...data, coinId: coin._id, userId: user._id, coinApiId: coin.apiId})) 
        await dispatch(getLoggedUser(token))

        reset()
    }

  return (
    <CoinCreatePostCardStyled onSubmit={handleSubmit((data) => handleClick(data))}>

        <CoinCreatePostCardHeader>
            
            <div className='user-info'>
                <img src={require('../../../assets/coins/PICLogo.png')} alt="" />

                <div>
                    <span>{user.username}</span>
                    <p>Level {user.level}</p>
                </div>
            </div>

        </CoinCreatePostCardHeader>

        <DivisorStyled />

        <CoinCreatePostCardBody>
            <CoinCreatePostCardBodyHeader>
                <input type="text" maxLength={60} id={'title'} placeholder={'No que está pensando?'} {...register('title')}/>
            
                <div className='coin-info'>
                    <img src={coin.image} alt="" />
                    <h3>{coin.name}</h3>
                    <DetailButton texto={coin.symbol.toUpperCase()}/>
                </div>

                
            </CoinCreatePostCardBodyHeader>

            <CoinCreatePostCardBodyMessage>
                <textarea id="message" {...register('message')} placeholder={'Deixe uma mensagem'}></textarea >
            </CoinCreatePostCardBodyMessage>
        </CoinCreatePostCardBody>

        {user.accountBalance >= 10 ?
            <CoinCreatePostCardInteractions>
                <button type='submit'>
                    <p>Enviar</p>
                    <div><p>-10 Safyr</p></div>
                </button>
            </CoinCreatePostCardInteractions> 
            :
            <CoinCreatePostCardInteractionsBlocked>
            <button type='submit'>
                <p>Sem Saldo</p>
                <div><p>-10 Safyr</p></div>
            </button>
            </CoinCreatePostCardInteractionsBlocked>
        }

        
        
        
    </CoinCreatePostCardStyled>
  )
}

import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { CoinPostCardBody, CoinPostCardBodyHeader, CoinPostCardBodyMessage, CoinPostCardHeader, CoinPostCardInteractions, CoinPostCardStyled } from './PostCard.styled'

export const PostCard = ({comment}) => {
    const { convertISODate } = useContext(GlobalContext)

  return (
    <CoinPostCardStyled>
        
        <CoinPostCardHeader>
            
            <Link to={`/user/${comment.username}`} className='user-info'>
                <img src={require('../../../assets/coins/PICLogo.png')} alt="" />

                <div>
                    <span>{comment.username}</span>
                    <p>Level {comment.userLevel}</p>
                </div>
            </Link>

            <strong>{convertISODate(comment.createdAt)}</strong>
            
        </CoinPostCardHeader>

        <DivisorStyled />

        <CoinPostCardBody>
            <CoinPostCardBodyHeader>
                <h1>{comment.title}</h1>
                <div className='coin-info'>
                    <Link to={`/criptomoedas/${comment.coinApiId}`} >
                        <img src={comment.coinImage} alt="" />
                        <h3>{comment.coinName}</h3>
                        <DetailButton texto={comment.coinSymbol.toUpperCase()}/>
                    </Link>
                </div>
                
            </CoinPostCardBodyHeader>

            <CoinPostCardBodyMessage>
                {comment.message}
            </CoinPostCardBodyMessage>
        </CoinPostCardBody>

        <CoinPostCardInteractions>
            <FaHeart fill={'#2563eb'} size={18} />
            {comment.likeCount}
        </CoinPostCardInteractions>
        
        
    </CoinPostCardStyled>
  )
}

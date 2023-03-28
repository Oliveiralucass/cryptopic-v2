import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { CoinPostCardBody, CoinPostCardBodyHeader, CoinPostCardBodyMessage, CoinPostCardHeader, CoinPostCardInteractions, CoinPostCardStyled } from './CoinPostCard.styled'

export const CoinPostCard = ({comment}) => {
    const { convertISODate } = useContext(GlobalContext)

  return (
      <CoinPostCardStyled>
        <Link to={`/user/${comment.username}/${comment._id}`}>
        
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


            <CoinPostCardBody>
                <CoinPostCardBodyHeader>
                    
                    <div className='coin-info'>
                        <Link to={`/criptomoedas/${comment.coinApiId}`} >
                            <img src={comment.coinImage} alt="" />
                            <h3>{comment.coinName}</h3>
                            <DetailButton texto={comment.coinSymbol.toUpperCase()}/>
                        </Link>
                    </div>

                    <DivisorStyled />
                    <h1>{comment.title}</h1>

                </CoinPostCardBodyHeader>

                <CoinPostCardBodyMessage style={{whiteSpace: 'pre-wrap'}}>  
                    {comment.message}
                </CoinPostCardBodyMessage>
            </CoinPostCardBody>

            <DivisorStyled />

            <CoinPostCardInteractions>
                <FaHeart fill={'#2563eb'} size={18} />
                {comment.likeCount}
            </CoinPostCardInteractions>
            
        </Link>
    </CoinPostCardStyled>
  )
}

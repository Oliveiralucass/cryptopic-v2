import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getLoggedUser } from '../../../store/features/authSlice'
import { getDefaultPostsFeed } from '../../../store/features/coinSlice'
import { likePost } from '../../../store/features/userSlice'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { PostCardBody, PostCardBodyHeader, PostCardBodyMessage, PostCardHeader, PostCardInteractions, PostCardStyled } from './PostCard.styled'

export const PostCard = ({comment}) => {
    const { convertISODate } = useContext(GlobalContext)

    const dispatch = useAppDispatch()
    const { user, token } = useAppSelector(state => state.auth)

    const handleLike = async() =>{
        await dispatch(likePost({postId: comment._id, userId: user._id})); 
    }

  return (
    <PostCardStyled>
        
        <Link to={`/user/${comment.username}/${comment._id}`}>
            <PostCardHeader>
                <Link to={`/user/${comment.username}`} className='user-info'>
                    <img src={require('../../../assets/coins/PICLogo.png')} alt="" />

                    <div>
                        <span>{comment.username}</span>
                        <p>Level {comment.userLevel}</p>
                    </div>
                </Link>

                <strong>{convertISODate(comment.createdAt)}</strong>
                
            </PostCardHeader>

        
            <PostCardBody>
                <PostCardBodyHeader>
                 
                    <div className='coin-info'>
                        <Link to={`/criptomoedas/${comment.coinApiId}`} >
                            <img src={comment.coinImage} alt="" />
                            <h3>{comment.coinName}</h3>
                            <DetailButton texto={comment.coinSymbol.toUpperCase()}/>
                        </Link>
                    </div>

                    <DivisorStyled />
                    <h1>{comment.title}</h1>
                </PostCardBodyHeader>
                
                    <PostCardBodyMessage style={{whiteSpace: 'pre-wrap'}}>
                        {comment.message}
                    </PostCardBodyMessage>

                
            </PostCardBody>
        
            <DivisorStyled />

            <PostCardInteractions>
                {comment && user && Object.keys(comment.likes).some(e => e == user._id) ? 
            <div className='likeButton'>
                <FaHeart fill={'#2563eb'} size={20} onClick={() => handleLike()}/>
                <p>Curtido por {comment.likes ? Object.keys(comment.likes).length : 0} pessoas</p>
            </div> : user ?
            
            <div className='likeButton' >
                <FaRegHeart fill={'#2563eb'} size={20} onClick={() => handleLike()}/>
                <p>Curtido por {comment.likes ? Object.keys(comment.likes).length : 0} pessoas</p>
            </div> :

            <div className='likeButton'>
                <FaRegHeart fill={'#2563eb'} size={20}/>
                <p>Curtido por {comment.likes ? Object.keys(comment.likes).length : 0} pessoas</p>
            </div>}
            </PostCardInteractions>
        </Link>
    </PostCardStyled>
  )
}

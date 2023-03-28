import React, { useContext, useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getLoggedUser } from '../../../store/features/authSlice'
import { getCoinById, getPostById, likeCoin } from '../../../store/features/coinSlice'
import { getUserByUsername, likePost } from '../../../store/features/userSlice'
import { IPost } from '../../../utils/interfaces'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { ColorLineStyled } from '../../ColorLine/ColorLine.styled'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'
import { Footer } from '../../Footer/Footer'
import { MainLoading } from '../../Loadings/MainLoading/MainLoading'
import { PostCard } from '../PostCard/PostCard'
import { PostElementBody, PostElementCoin, PostElementCoinStats, PostElementCoinStatsName, PostElementComments, PostElementCreator, PostElementCreatorStats, PostElementLikes, PostElementStyled } from './PostElement.styled'

export const PostElement = () => {

    const {post} = useParams()

    const dispatch = useAppDispatch()
    const { selectedPost } = useAppSelector(state => state.coin)
    const { convertISODate } = useContext(GlobalContext)
    const { user, token } = useAppSelector(state => state.auth)

    useEffect(() => {
      post && dispatch(getPostById(post))

    }, [post])

    const handleLike = async() =>{
      await dispatch(likePost({postId: selectedPost._id, userId: user._id})); 
      await dispatch(getLoggedUser(token));
    }
  


    console.log(selectedPost)

  return selectedPost && selectedPost._id == post ? (
    <>
    <PostElementStyled>
      <PostElementCreator>
        <img src={require('../../../assets/coins/PICLogo.png')} alt="" />
        <PostElementCreatorStats>
          <div>
            <h2>@{selectedPost.username}</h2>
            <DetailButtonColored texto={`Lvl ${selectedPost.userLevel}`} />
          </div>

          <div>
            <DetailButton texto={`Postado em ${convertISODate(selectedPost.createdAt)}`} />
          </div>
        </PostElementCreatorStats>
      </PostElementCreator>

      <DivisorStyled />
      
      <PostElementCoin> 
          <PostElementCoinStats>
            <Link to={`/criptomoedas/${selectedPost.coinId}`}>
              <img src={selectedPost.coinImage} alt="" />
            </Link>

            <PostElementCoinStatsName>
              <Link to={`/criptomoedas/${selectedPost.coinId}`}>
                <h2>{selectedPost.coinName}</h2>
                <DetailButton texto={selectedPost.coinSymbol.toUpperCase()} />
              </Link>
            </PostElementCoinStatsName>
          </PostElementCoinStats>
        </PostElementCoin>

      <ColorLineStyled color={'#2563eb'} />

      <PostElementBody>
        <h1 className='article-title'>{selectedPost.title}</h1>
        <div className='article-text' style={{whiteSpace: 'pre-wrap'}}>{selectedPost.message}</div>
      </PostElementBody>

      <DivisorStyled />

      <PostElementLikes>
        {selectedPost && user && Object.keys(selectedPost.likes).some(e => e == user._id) ? 
          <div className='likeButton'>
            <FaHeart fill={'#2563eb'} size={20} onClick={() => handleLike()}/>
            <p>Curtido por {selectedPost.likes ? Object.keys(selectedPost.likes).length : 0} pessoas</p>
          </div> : user ?
          
          <div className='likeButton' >
            <FaRegHeart fill={'#2563eb'} size={20} onClick={() => handleLike()}/>
            <p>Curtido por {selectedPost.likes ? Object.keys(selectedPost.likes).length : 0} pessoas</p>
          </div> :

          <div className='likeButton'>
            <FaRegHeart fill={'#2563eb'} size={20}/>
            <p>Curtido por {selectedPost.likes ? Object.keys(selectedPost.likes).length : 0} pessoas</p>
          </div>}
      </PostElementLikes>

      
      
      <PostElementComments>
      {selectedPost.comments.map(comment => <div>
        {comment}
      </div> )}
      </PostElementComments>

    </PostElementStyled>
    <Footer />
    </>
  ) : <MainLoading />
}

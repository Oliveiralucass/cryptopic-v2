import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getPostById } from '../../../store/features/coinSlice'
import { getUserByUsername } from '../../../store/features/userSlice'
import { MainLoading } from '../../Loadings/MainLoading/MainLoading'
import { PostCard } from '../PostCard/PostCard'
import { PostElementStyled } from './PostElement.styled'

export const PostElement = () => {

    const {post} = useParams()

    const dispatch = useAppDispatch()
    const { selectedPost } = useAppSelector(state => state.coin)
  
    useEffect(() => {
      post && dispatch(getPostById(post))

    }, [post])


    console.log(selectedPost)

  return selectedPost ? (
    <PostElementStyled>
        <h1>{selectedPost.title}</h1>
        <h1>{selectedPost.message}</h1>
        <h1>{selectedPost.username}</h1>
    </PostElementStyled>
  ) : <MainLoading />
}

import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getDefaultPostsFeed } from '../../../store/features/coinSlice'
import { AdSection } from '../../AdSection/AdSection'
import { MainLoading } from '../../Loadings/MainLoading/MainLoading'
import { PostCard } from '../../Post/PostCard/PostCard'

export const HomeDefaultFeed = () => {

    const dispatch = useAppDispatch()
    const { postFeed } = useAppSelector(state => state.coin)
    const { user } = useAppSelector(state => state.user)


    useEffect(() => {
        const dispatchFeed = async() => {
            await dispatch(getDefaultPostsFeed())
        }

        dispatchFeed()
    }, [])

  
    
  return postFeed ? (
    <div>
        {postFeed.map((post, index) => (index + 1) % 11 == 0 ? <AdSection /> : <PostCard key={post._id}  comment={post}/>)}
    </div>
  ) : <MainLoading />
}

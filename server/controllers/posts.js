import express from 'express'
import PostMessage from '../models/postMessage.js'
import User from '../models/User.js'
import Coin from '../models/Coin.js'
import Post from '../models/Post.js'

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find()

        console.log(postMessages);

        res.status(200).json(postMessages)
    } catch (error){
        res.status(400).json({message: error.message });
    }
}

/* CREATE */

export const createPost = async (req, res) => {

    try {
        const{ userId, coinId, title, message, coinApiId } = req.body
        const user = await User.findById(userId)
        const coin = await Coin.findById(coinId)
        
       if(user.accountBalance >= 10){

            const newPost = new Post({
                userId,
                username: user.username,
                userLevel: user.level,
                userImage: user.profile.profileImage,
                coinId,
                coinApiId,
                coinName: coin.name,
                coinImage: coin.image,
                coinSymbol: coin.symbol,
                message,
                title,
                likes: [],
                comments: [],
            })
            await newPost.save()
            user.profile.posts.unshift(newPost)
            user.accountBalance = user.accountBalance - 10
            coin.comments.unshift(newPost)

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { profile: user.profile, accountBalance: user.accountBalance},
                { new: true}
            );

            await user.save()
            await coin.save()

            const post = await Post.find()
            res.status(201).json(coin)
       } else {
            res.status(500).send('Saldo insuficiente')
       }

    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

/* READ */

export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find()

        const sortedPost = post.sort((a,b) => Number(b.createdAt) - Number(a.createdAt))
       
        res.status(200).json(sortedPost)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const getUserPosts = async(req, res) => {
    try{
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const getPostById = async(req, res) => {
    try{
        const { postId } = req.params;
        const post = await Post.findById( postId )

        res.status(200).json(post)
    } catch(error){
        res.status(404).json({ message: error.message })
    }
}

/* UPDATE */

export const likePost = async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if(isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes},
            { new: true}
        );
    
        res.status(200).json(updatedPost)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

/* DELETE */

export const deletePost = async(req, res) => {
    const { id } = req.params;

    const post = Post.findById(id)
    const user = User.findById(post.userId)
    const coin = User.findById(post.coinId)

    try {
        user.profile.posts.unshift(newPost)
    } catch {

    }
}
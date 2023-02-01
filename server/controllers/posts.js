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
    const post = req.body;

    const newPost = new PostMessage(post)
    try {
        
        const{ userId, coinId, message } = req.body
        const user = await User.findById(userId)
        const coin = await Coin.findById(coinId)
        const newPost = newPost({
            userId,
            username: user.username,
            coinId,
            coinName: coin.name,
            coinImage: coin.image,
            coinSymbol: coin.symbol,
            message,
            likes: {},
            comments: {}
        })

        await newPost.save()

        const post = await Post.find()
        res.status(201).json(post)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

/* READ */

export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find()
        res.status(200).json(post)
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
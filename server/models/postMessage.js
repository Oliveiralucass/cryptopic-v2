import mongoose from 'mongoose'
import User from './User.js';

const postSchema = mongoose.Schema({
    title: String,
    userId: String,
    username: String,
    coinId: String,
    coinName: String,
    coinImage: String,
    coinSymbol: String,
    likes: [],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: []
});




const postMessage = mongoose.model('PostMessage', postSchema)

export default postMessage
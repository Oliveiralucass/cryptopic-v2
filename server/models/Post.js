import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        userLevel:{
            type: Number,
            required: true
        },
        userImage: {
            type: Number,
            required: true
        },
        coinId: {
            type: String,
            required: true
        },
        coinApiId: {
            type: String,
            required: true
        },
        coinName: {
            type: String,
            required: true
        },
        coinImage: {
            type: String,   
            required: true
        },
        coinSymbol: {
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        comments: {
            type: [],
        },
        likes: {
            type: Map,
            of: Boolean,
        },
        likeCount: {
            type: Number,
            default: 0
        },
    },
    {timestamps: true}
);

const Post = mongoose.model('Post', postSchema)

export default Post;
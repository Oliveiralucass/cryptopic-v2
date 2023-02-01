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
        coinId: {
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
        message: {
            type: String,
            required: true
        },
        likes: {
            type: Map,
            of: Boolean,
        }
    },
    {timestamps: true}
);

const Post = mongoose.model('Post', postSchema)

export default Post;
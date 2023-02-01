import mongoose from "mongoose";
import Post from "./Post.js";
const ProfileSchema = new mongoose.Schema({
        profileImage: {
            type: Number,
        },
        posts: {
            type: Post,
        },
        CoinsLiked: {
            type: Map,
            required: true
        },
    },

);
const User = mongoose.model("User", UserSchema)

export default User
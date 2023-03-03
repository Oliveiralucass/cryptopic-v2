import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        level: {
            type: Number,
            required: true
        },
        xp: {
            type: Number,
            required: true
        }, 
        xpToNextLevel: {
            type: Number,
            required: true
        },
        accountBalance: {
            type: Number,
            required: true
        },
        miner1: {
            type: Object,
            required: true
        },
        miner2: {
            type: Object,
            required: true
        },
        miner3: {
            type: Object,
            required: true
        },
        profile: {
            type: Object,
            required: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        contentsCompleted: {
            type: Object,
            required: true
        },
        viewedProfile: Number,
        impressions: Number
    },
    {timestamps: true}
);
const User = mongoose.model("User", UserSchema)

export default User
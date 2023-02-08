import mongoose from "mongoose";
const CoinSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        symbol: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        likes: {
            type: Map,
            required: true
        },
        comments: {
            type: Map,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        apiId: {
            type: String,
            unique: true,
        }
    },
    {timestamps: true}
);
const Coin = mongoose.model("Coin", CoinSchema)

export default Coin
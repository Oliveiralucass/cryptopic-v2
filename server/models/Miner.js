import mongoose from "mongoose";
const MinerSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        level: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        }, 
        reward: {
            type: Number,
            required: true
        },
        upgradeCost: {
            type: Number,
            required: true
        },
        blocked: Boolean
    },
);
const Miner = mongoose.model("Miner", MinerSchema)

export default Miner
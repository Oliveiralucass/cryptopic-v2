import mongoose from "mongoose";

const discoverSchema = mongoose.Schema({
    title: String,
    url: String,
    contentTitle: String,
    content: [String],
    categories: [String],
    image: String,
    date: String,
    readTime: Number,
    mainColor: String,
    secondaryColor: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const DiscoverContent = mongoose.model('DiscoverContent', discoverSchema)

export default DiscoverContent
import mongoose from "mongoose";

const expeditionSchema = mongoose.Schema({
    title: String,
    url: String,
    contentTitle: String,
    content: [String],
    categories: [String],
    image: String,
    readTime: Number,
    mainColor: String,
    secondaryColor: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ExpeditionContent = mongoose.model('ExpeditionContent', expeditionSchema)

export default ExpeditionContent
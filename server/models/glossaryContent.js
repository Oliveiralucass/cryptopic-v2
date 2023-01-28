import mongoose from "mongoose";

const glossarySchema = mongoose.Schema({
    title: String,
    url: String,
    content: String,
    htmlContent: String,
    categories: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const GlossaryContent = mongoose.model('GlossaryContent', glossarySchema)

export default GlossaryContent

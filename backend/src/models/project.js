import { array } from 'joi';
import mongoose from 'mongoose';
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    description: String,
    link: {
        type: String,
        default: ""
    },
    linkGithub: {
        type: String,
        default: ""
    },
    technologyId: [{
        type: mongoose.Types.ObjectId,
        ref: "Technology"
    }],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
    
    
},{timestamps: true, versionKey: false})


export default mongoose.model('Project', projectSchema);
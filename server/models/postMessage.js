import mongoose from "mongoose";

const postMessageSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String, 
    tags:[String],
    selectFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});
const PostMessage = mongoose.model('PostMessage', postMessageSchema);
export default PostMessage;
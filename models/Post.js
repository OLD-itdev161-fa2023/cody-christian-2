import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: 'ObjectID',
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: date.now
    },
});

const Post = mongoose.model('post', PostSchema);

export default Post;
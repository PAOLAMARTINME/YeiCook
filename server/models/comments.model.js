const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        chef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chef",
            required: true,
        },
    },
    { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
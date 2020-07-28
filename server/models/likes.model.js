const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
    {
        chef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chef",
            required: true,
        },
    },
    { timestamps: true }
);
const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
import mongoose, { Schema, mongo } from "mongoose";

const commentSchema = new Schema(
  {
    user: String,
    comment: String,
  },
  {
    timestamps: true,
  },
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

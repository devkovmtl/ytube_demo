import Comment from "../models/Comment.js";
import Video from "../models/Video.js";

export const addComment = async (req, res, next) => {
  try {
    const newComment = new Comment({ ...req.body, userId: req.user.id });

    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (error) {
    next(error);
  }
};

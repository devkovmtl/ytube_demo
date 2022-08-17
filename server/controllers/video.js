import Video from "../models/Video.js";
import { createError } from "../error.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });

  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video not found!"));
    }
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can update only your videos!"));
    }
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);

      res.status(200).json("The video has been deleted");
    } else {
      return next(createError(403, "You can delete only your videos!"));
    }
  } catch (error) {
    next(error);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });

    res.status(200).json("The view has been increased.");
  } catch (error) {
    next(error);
  }
};

export const randomVideo = async (req, res, next) => {
  try {
    const video = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const trendVideo = async (req, res, next) => {
  try {
    const video = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
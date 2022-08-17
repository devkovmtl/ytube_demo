import express from "express";
import {
  addVideo,
  updateVideo,
  getVideo,
  deleteVideo,
  addView,
  trendVideo,
  randomVideo,
  subVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);
// update a video
router.put("/:id", verifyToken, updateVideo);
// delete a video
router.delete("/:id", verifyToken, deleteVideo);
// get single video
router.get("/find/:id", getVideo);

router.put("/view/:id", addView);

router.get("/trend", trendVideo);

router.get("/random", randomVideo);

router.get("/sub", subVideo);

export default router;

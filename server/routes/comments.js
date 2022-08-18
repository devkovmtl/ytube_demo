import express from "express";

import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken);

export default router;

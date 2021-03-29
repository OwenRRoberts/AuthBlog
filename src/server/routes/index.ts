import * as express from 'express';
import blogsRouter from "./blogs";

const router = express.Router();

// route is already /api

router.use("/blogs", blogsRouter);

export default router;
import express from 'express';

import { createPosts, getPosts } from '../controllers/Post.js';
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPosts);
export default router;
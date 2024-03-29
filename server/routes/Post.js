import express from 'express';

import { createPosts, getPosts, updatePost } from '../controllers/Post.js';
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePost);
export default router;
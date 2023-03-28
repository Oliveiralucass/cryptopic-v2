import express from 'express'
import { createPost, getFeedPosts, getUserPosts, likePost, deletePost, getPostById } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router()
/* CREATE */
router.post('/', verifyToken, createPost)


/* READ */  
router.get('/', getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);
router.get('/:postId', getPostById);

/* UPDATE */
router.patch('/:id/like', likePost);

/* DELETE */
router.delete('/:id', verifyToken, deletePost)

export default router
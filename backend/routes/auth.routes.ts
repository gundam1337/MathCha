import express from 'express';
import { login } from '../controllers/auth/authLogin';

const router = express.Router();

router.get('/signin', login);

export default router;
import express from 'express';
import { login } from '../controllers/auth/authLogin';

const router = express.Router();

router.post('/signin', login);

export default router;
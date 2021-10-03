import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [
    body('id').trim().isLength({ min: 3 }).withMessage('3글자 이상 적으시오'),
    body('password').trim().isLength({ min: 3 }).withMessage('3글자 이상 적으시오'),
    validate,
];

//유효성 검사 진행
router.post('/signup', validateTweet, authController.postSignup);
router.post('/login', validateTweet, authController.putLogin);


export default router;
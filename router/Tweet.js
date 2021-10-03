import express from 'express';
import { body } from 'express-validator';
import * as tweetController from '../controller/Tweet.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [
    body('text')
        .trim()
        .isLength({ min: 3 })
        .withMessage('3글자 이상 적으시오'),
    validate,
];

router.get('/', tweetController.getAllTweet);

router.get('/:id', tweetController.getTweet);

//유효성 검사 진행
router.post('/', validateTweet, tweetController.postTweet);

router.put('/:id', validateTweet, tweetController.putTweet);

router.delete('/:id', tweetController.deleteTweet);

export default router;
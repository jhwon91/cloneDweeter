import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).send('GET:/user');
});

router.post('/', (req, res) => {
    res.status(201).send('POST:/user');
});

router.put('/', (req, res) => {
    res.status(201).send('PUT:/user');
});

router.delete('/', (req, res) => {
    res.status(201).send('DELETE:/user');
});

export default router;
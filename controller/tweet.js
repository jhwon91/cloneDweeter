import * as tweetRepository from '../Storage/userStorage.js';

export async function getAllTweet(req, res) {
    // res.status(201).send('GET:/user');
    // res.status(200), send(json.stringify(data));
    const username = req.query.username
    const data = await (username
        ? tweetRepository.gatByUsername(username)
        : tweetRepository.getAll());
    res.status(200).json(data);
    console.log(data);
};

export async function getTweet(req, res) {
    // console.log(req.params.id);
    const userid = req.params.id
    const data = await tweetRepository.getById(userid);

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: `Tweet id(${userid} not found)` });
    }
    console.log(data);
};

export async function postTweet(req, res) {
    const Reqarry = req.body;
    const tweet = await tweetRepository.create(Reqarry.text, Reqarry.name, Reqarry.username, Reqarry.url);
    res.status(201).json(tweet);
};

export async function putTweet(req, res) {
    // console.log(req.params.id);
    const userid = req.params.id;
    const newText = req.body.text;
    const tweetID = await tweetRepository.update(userid, newText);

    if (tweetID) {
        res.status(200).json(tweetID);
    } else {
        res.status(404).json({ message: `Tweet id(${userid} not found)` });
    }
};

export async function deleteTweet(req, res) {
    const userid = req.params.id;
    await tweetRepository.remove(userid);
    res.status(204).send('삭제완료');
}
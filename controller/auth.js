import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { } from 'express-async-errors';
import * as tweetRepository from '../Storage/userStorage.js';

const jwtSecretKey = '';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

export async function postSignup(req, res) {
    const Reqarry = req.body;
    const tweet = await tweetRepository.create(Reqarry.text, Reqarry.name, Reqarry.username, Reqarry.url);
    res.status(201).json(tweet);
};


export async function putLogin(req, res) {
    const Reqarry = req.body;
    const tweet = await tweetRepository.create(Reqarry.text, Reqarry.name, Reqarry.username, Reqarry.url);
    res.status(201).json(tweet);
};











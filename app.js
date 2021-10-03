import express from 'express';
import tweet from './router/Tweet.js';
import auth from './router/auth.js';

// import core from 'core';


const app = express();
app.use(express.json());
// app.use(core());

app.use('/tweets', tweet);
app.use('/auth', auth);

app.use((req, res, next) => {
    res.status(404).send('Not available!@@')
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('sorry, try later!');
});


app.listen(8080);



// import postRouter from './router/post.js';
// import userRouter from './router/user.js';
//import morgan from 'morgan';
//import helmet from 'helmet';

// all = '/api' 메서드에 한에서 만 다 작동함 'api/*' 명시를 하면 use랑 똑같이 작용
// app.all('/api', (req, res, next) => {
//     console.log('all');
//     next();
// });

// // use = '/sky' 메서드 하위에서 메서드에서 다 작동함
// app.use('/sky', (req, res, next) => {
//     console.log('use');
//     next();
// });

// send를 할때는 return 으로 꼭 콜백함수에서 빠져 나가야함
// app.get('/sky/:id', (req, res, next) => {
// console.log(req.params);
// console.log(req.params.id);
// console.log(req.query);
// console.log(req.query.keyword);
// res.json({ name: 'won' });
// res.status(201).send('create');
// });

//post test

// app.post('/', (req, res, next) => {
//     console.log(req.body);

// });


// app.use('/posts', postRouter);
// app.use('/users', userRouter);
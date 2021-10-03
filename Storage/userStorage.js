


let userStorage = [
    {
        id: '1',
        text: 'hihihihihihi...',
        createAt: Date.now().toString(),
        name: 'won',
        username: 'jwon391@nate.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
    },
    {
        id: '2',
        text: '2번이다 하하하하하하핳',
        createAt: Date.now().toString(),
        name: 'joing',
        username: 'qwerta123456@naver.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
    },
    {
        id: '3',
        text: '우왕 잘 된다.',
        createAt: Date.now().toString(),
        name: 'joing',
        username: 'qwerta123456@naver.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
    },

];

export async function getAll() {
    console.log(userStorage);
    return userStorage;
};

export async function gatByUsername(username) {
    return userStorage.filter((t) => t.username === username);
};

export async function getById(userid) {
    return userStorage.find((t) => t.id === userid);
};

export async function create(text, name, username, url) {
    const tweet =
    {
        id: Date.now().toString(),
        text,
        createAt: Date.now().toString(),
        name,
        username,
        url
    }
    userStorage = [tweet, ...userStorage];
};

export async function update(id, text) {
    const tweet = userStorage.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return text;
};

export async function remove(id) {
    userStorage.filter((t) => t.id !== id);
};
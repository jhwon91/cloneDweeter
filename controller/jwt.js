import jwt from 'jsonwebtoken';
//https://jwt.io/
//https://www.lastpass.com/features/password-generator

const screat = '5p*QTLyzy2!Ma$hEUhOusK3yADFkzEP^';
const token = jwt.sign(
    {
        id: 'userId',
        isAdmin: true,
    },
    screat,
    { expiresIn: 2 }
);

setTimeout(() => {
    jwt.verify(token, screat, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);


// console.log(token);

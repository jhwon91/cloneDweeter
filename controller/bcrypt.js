import bcrypt from 'bcrypt';

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync(`abcd1233`, hashed);
console.log(result);
import jwt from 'jsonwebtoken';

export function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const SECRET_KEY = process.env.SECRET_KEY;

export function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}

export function decodeToken(token) {
    return jwt.decode(token);
}

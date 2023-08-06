
import jwt    from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const Encryption = () => {

    const JWT_SECRET = process.env.JWT_SECRET;

    const DEFAULT_SALT_STRING = process.env.DEFAULT_SALT || '10';
    const DEFAULT_SALT = Number(DEFAULT_SALT_STRING)

    const salt = bcrypt.genSaltSync(DEFAULT_SALT);

    const hash = (text) => {
        return bcrypt.hashSync(String(text), salt);
    }

    const equals = (clearText, hashedText) => {
        return bcrypt.compareSync(clearText, hashedText);
    }

    const createToken = (id) => {
        const payload = { user: String('' + id)  };
        return jwt.sign(payload, JWT_SECRET);
    }

    return {
        hash,
        equals,
        createToken
    }
}

export default Encryption();

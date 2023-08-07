
import jwt    from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const AuthUtils = () => {

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
        const payload = { id: String('' + id)  };
        return jwt.sign(payload, JWT_SECRET);
    }

    const authenticateJWT = (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
            });
        } 
        else {
            res.sendStatus(401);
        }
    };

    return {
        hash,
        equals,
        createToken,
        authenticateJWT
    }
}

export default AuthUtils();

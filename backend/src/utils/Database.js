
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Database = () => {

    const connect = async () => {

        try {

            const DB_URL = process.env.DB_URL || 'mongodb://0.0.0.0:27017/bolttechtodo';
            
            await mongoose.connect(DB_URL);

            mongoose.connection.on('error', (e) => {
                console.log(`database error: ${e}`)
            })

            console.log('connected to database')
        }
        catch (e) {
            console.log('could not connect to database')
        }
    }

    const disconnect = async () => {
        await mongoose.connection.close();
    }

    return {
        connect,
        disconnect
    }
}

export default Database();

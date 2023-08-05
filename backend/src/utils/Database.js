
import mongoose from 'mongoose';

const Database = () => {

    const connect = async () => {

        try {
            await mongoose.connect('mongodb://0.0.0.0:27017/bolttechtodo');

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

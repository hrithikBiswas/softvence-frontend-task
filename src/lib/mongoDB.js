// import dns from 'dns';
import { connect } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        // dns.setServers(['1.1.1.1', '8.8.8.8']);
        await connect(MONGODB_URI);
        console.log('MongoDb Connected!');
    } catch (error) {
        console.log('Failed to connect mongoDB:', error.message);
    }
};

export default connectDB;

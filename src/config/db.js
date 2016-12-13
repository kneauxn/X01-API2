import Mongo from 'mongojs';

const MONGO_URI = process.env.MONGODB_URI || 'gamesdb';

const db = Mongo(MONGO_URI);

export default db;

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


export const collectionsName = {
    userCollections : 'users'
}

export const dbConnnection = async (collectionName) => {
    try {

        await client.connect();


        const db = client.db(process.env.DB_NAME);

        console.log("✅ Connected to DB:", process.env.DB_NAME);
        console.log("🗂️ Using collection:", collectionName);

        return db.collection(collectionName);
    } catch (error) {
        console.error(" Database connection error:", error);
    }
};

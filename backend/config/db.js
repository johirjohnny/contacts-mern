// const pass = contact1234;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://contactUser:contact1234@cluster0.cdrp6.mongodb.net/contactBook?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("contactBook").collection("contacts");
//     console.log('db connencted');
//     // perform actions on the collection object
//     client.close();
// });

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://contactUser:contact1234@cluster0.cdrp6.mongodb.net/contactBook?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
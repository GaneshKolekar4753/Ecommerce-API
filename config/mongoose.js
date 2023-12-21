
const mongoose=require('mongoose');

const mongooseURI=process.env.MONGODB_URI;

mongoose.connect(`${mongooseURI}product-db`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
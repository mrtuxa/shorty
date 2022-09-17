require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.DB, {
        useNewUrlParser: true
       })
       console.log('MongoDB Connected...')
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
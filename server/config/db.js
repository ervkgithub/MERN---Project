const mongoose = require("mongoose");

const connectDB = async () => {

  mongoose.set("strictQuery", false);

  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, () => {
    console.log('MongoDB Atlas VVV connected...')
})

};

module.exports = connectDB;

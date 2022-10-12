const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB")).catch(err => console.error(err));

const countrySchema = new mongoose.Schema({
    location: {
        type: String,
        require: true
    },
    flag: String,
    name: {
        type: String,
        require: true
    }
});

const countryModel = mongoose.model("country", countrySchema);

module.exports = {
    countryModel
}
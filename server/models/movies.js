const mongoose = require('mongoose');
const paginate= require('mongoose-paginate');

const moviesSchema = new mongoose.Schema({
    category: String,
    name:String,
    imageUrl:String
})

moviesSchema.plugin(paginate);

module.exports = mongoose.model('Movies', moviesSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    album: {type: String, required: true, max: 100},
    artist: {type: String, required: true, max: 100},
    rate: {type: String, required: false, max: 100},
    reviews: {type: Array, required: false, max: 100},
    hidden: {type: Boolean, required: true, max: 100},
    reported: {type: Boolean, require: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);


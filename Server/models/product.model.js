const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    quantity: {type: Number, required: true, max: 1000},
    due: {type: Number, required: true, max: 30},
    cnName: {type: String, required: true, max: 100},
    type: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);

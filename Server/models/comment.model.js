const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    user: {type: String, required: true, max: 100},
    comment: {type: String, required: true},
    date: {type: Date, required: true},
    rate: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Comment', CommentSchema);


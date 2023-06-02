const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
    dream: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        dafault: false
    }
})

module.exports = mongoose.model('dream', dreamSchema);
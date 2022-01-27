/* Importing mongoose.  */

const mongoose = require('mongoose');

/* Defining mongoose schema.  */
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

/* exporting the model.   */

module.exports = mongoose.model('User', bookSchema);
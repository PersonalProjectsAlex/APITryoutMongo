// Global instances
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    word: {type: String, required: true, max: 100},
    meaning: {type: String, required: true},
    sentence:{type: String, required: false},
    
}, { collection: 'Words' });

// Export the model
module.exports = mongoose.model('Words', WordSchema);
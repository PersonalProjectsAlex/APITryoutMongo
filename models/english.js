// Global instances
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true},
    branch: {type: String, required: false},
}, { collection: 'Student' });


// Export the model
module.exports = mongoose.model('Student', StudentSchema);
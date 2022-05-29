const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const componentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

const Component = mongoose.model('component', componentSchema);

module.exports = Component;
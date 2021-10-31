const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema(
    {
        deviceId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },

    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Room', schema);

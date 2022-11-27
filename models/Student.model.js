const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    completeName : {
        type: String,
        required: true,
    },
    group: {
        type: mongoose.ObjectId,
        ref: "Groups",
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
    }
});

mongoose.model('Student', StudentSchema, 'collectionStudents');
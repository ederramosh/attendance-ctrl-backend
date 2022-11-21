const mongoose = require('mongoose');

const GroupsSchema = new mongoose.Schema({
    nameGroup: {
        type: String,
        required: true,
    }
});

mongoose.model('Groups', GroupsSchema, 'collectionGroups');
const { submitNewGroups,
        getAllGroups,
        getGroupById,
        updateGroupById,
        removeGroupById, } = require('./Groups.controller');

const { newTeacher,
        getAllTeachers, } = require('./Teachers.controller');

module.exports = {
    submitNewGroups,
    getAllGroups,
    getGroupById,
    updateGroupById,
    removeGroupById,
    newTeacher,
    getAllTeachers,
}
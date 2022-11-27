const { submitNewGroups,
        getAllGroups,
        getGroupById,
        updateGroupById,
        removeGroupById, } = require('./Groups.controller');

const { newTeacher,
        getAllTeachers,
        updateTeacher,
        removeTeacher, } = require('./Teachers.controller');

module.exports = {
    submitNewGroups,
    getAllGroups,
    getGroupById,
    updateGroupById,
    removeGroupById,
    newTeacher,
    getAllTeachers,
    updateTeacher,
    removeTeacher,
}
const { submitNewGroups,
        getAllGroups,
        getGroupById,
        updateGroupById,
        removeGroupById, } = require('./Groups.controller');

const { newTeacher,
        getAllTeachers,
        updateTeacher,
        removeTeacher, } = require('./Teachers.controller');

const { newStudent,
        getAllStudents,
        getStudentsByGroup,
        findStudentById,
        updateStudentById,
        removeStudent } = require('./Students.controller');

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
    newStudent,
    getAllStudents,
    getStudentsByGroup,
    findStudentById,
    updateStudentById,
    removeStudent,
}
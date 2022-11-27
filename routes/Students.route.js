const express = require('express');

const router = express.Router();

const { newStudent,
        getAllStudents,
        getStudentsByGroup,
        findStudentById,
        updateStudentById,
        removeStudent, } = require('../controllers');

router.post('/', newStudent);
router.get('/', getAllStudents);
router.get('/byGroup', getStudentsByGroup);
router.get('/byId/:id', findStudentById);
router.put('/byId/:id', updateStudentById);
router.delete('/byId/:id', removeStudent);

module.exports = router;
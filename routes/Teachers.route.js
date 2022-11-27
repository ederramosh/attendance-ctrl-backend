const express = require('express');
// Pending the auth

const router = express.Router();

const { newTeacher,
        getAllTeachers,
        updateTeacher,
        removeTeacher, } = require('../controllers');

router.post('/', newTeacher);
router.get('/', getAllTeachers);
router.put('/', updateTeacher);
router.delete('/', removeTeacher);

module.exports = router;
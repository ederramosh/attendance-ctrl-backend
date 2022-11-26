const express = require('express');
// Pending the auth

const router = express.Router();

const { newTeacher,
        getAllTeachers, } = require('../controllers');

router.post('/', newTeacher);
router.get('/', getAllTeachers);

module.exports = router;
const express = require('express');
const router = express.Router();
const groupsRouter = require('./Groups.route');
const teachersRouter = require('./Teachers.route');
const studentsRouter = require('./Students.route');

router.use('/groups', groupsRouter);
router.use('/teachers', teachersRouter);
router.use('/students', studentsRouter);

module.exports = router;
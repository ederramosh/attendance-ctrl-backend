const express = require('express');
const router = express.Router();
const groupsRouter = require('./Groups.route');
const teachersRouter = require('./Teachers.route');

router.use('/groups', groupsRouter);
router.use('/teachers', teachersRouter);

module.exports = router;
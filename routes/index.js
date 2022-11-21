const express = require('express');
const router = express.Router();
const groupsRouter = require('./Groups.route');

router.use('/group', groupsRouter);

module.exports = router;
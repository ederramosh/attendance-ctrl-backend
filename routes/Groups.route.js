const express = require('express');
// Pending the auth

const router = express.Router();

const { submitNewGroups,
        getAllGroups,
        getGroupById,
        updateGroupById,
        removeGroupById, } = require('../controllers');

router.post('/', submitNewGroups);
router.get('/', getAllGroups);
router.get('/:id', getGroupById);
router.put('/:id', updateGroupById);
router.delete('/:id', removeGroupById);

module.exports = router;
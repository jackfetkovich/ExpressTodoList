const express = require('express');
const {createNote, getAllNotes} = require('../controllers/noteController');

const router = express.Router();

router.post('/', createNote);
router.get('/', getAllNotes);

module.exports = router;
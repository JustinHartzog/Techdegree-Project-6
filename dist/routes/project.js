const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    const project = projects[req.params.id];
    res.render('project', { project });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// display all tasks
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.render('tasks', { tasks });
});

// render form to add a new task
router.get('/add', (req, res) => {
    res.render('add');
});

// handle form submission
router.post('/add', async (req, res) => {
    const { title } = req.body;
    await Task.create({ title });
    res.redirect('/tasks');
});

// delete a task
router.post('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
});

module.exports = router;

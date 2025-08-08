const express = require('express');
const router = express.Router();
const { createTask, listTasks, updateTask, deleteTask } = require('../controllers/tasks.controller');

router.post('/tasks', createTask);
router.get('/tasks', listTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;

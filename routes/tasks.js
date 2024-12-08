const express = require('express');
const { taskValidationSchema } = require('../utils/validate');
const Task = require('../models/Task');
const router = express.Router();


router.post('/', async (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    
   
    const existingTask = await Task.findOne({ title });
    if (existingTask) {
      return res.status(400).json({ message: 'Task with this title already exists' });
    }

   
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});




router.get('/', async (req, res, next) => {
  try {
    const { status, priority, sort, limit, skip } = req.query;
    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const options = {};
    if (sort) options.sort = { [sort]: 1 };

    const tasks = await Task.find(query)
      .sort(options.sort || {})
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);

    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});


router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

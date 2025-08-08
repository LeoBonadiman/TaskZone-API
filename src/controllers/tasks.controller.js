const Task = require('../models/Task');

// POST /tasks
async function createTask(req, res) {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'O título é obrigatório.' });
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro interno ao criar tarefa.' });
  }
}

// GET /tasks
async function listTasks(req, res) {
  try {
    const { q, completed, sort = 'createdAt', order = 'desc' } = req.query;

    const where = {};
    if (q) where.title = { $regex: q, $options: 'i' };
    if (completed !== undefined) where.completed = completed === 'true';

    const tasks = await Task
      .find(where)
      .sort({ [sort]: order === 'desc' ? -1 : 1 });

    res.json(tasks);
  } catch (err) {
    console.error('Erro ao listar tarefas:', err);
    res.status(500).json({ error: 'Erro interno ao listar tarefas.' });
  }
}

// PUT /tasks/:id
async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json(updatedTask);
  } catch (err) {
    console.error('Erro ao atualizar tarefa:', err);
    res.status(500).json({ error: 'Erro interno ao atualizar tarefa.' });
  }
}

// DELETE /tasks/:id
async function deleteTask(req, res) {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json({ message: 'Tarefa removida com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir tarefa:', err);
    res.status(500).json({ error: 'Erro interno ao excluir tarefa.' });
  }
}

module.exports = { createTask, listTasks, updateTask, deleteTask };


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const tasksRoutes = require('./routes/tasks.routes');
app.use('/api', tasksRoutes);

// Teste de rota
app.get('/', (req, res) => {
  res.send('API TaskZone funcionando 🎯');
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('🟢 Conectado ao MongoDB');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 5000}`);
  });
}).catch(err => {
  console.error('Erro ao conectar no MongoDB:', err);
});

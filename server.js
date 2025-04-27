// Importando bibliotecas necessárias
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Importação das rotas principais
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');
const diretorRoutes = require('./routes/diretorRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const faltasRoutes = require('./routes/faltasRoutes');
const notasRoutes = require('./routes/notasRoutes');
const eventoRoutes = require('./routes/eventoRoutes');

// Importação das rotas da IA
const iaRoutes = require('./routes/iaRoutes');
const iaSalvarRoute = require('./routes/iaSalvarRoute');

// Uso das rotas principais
app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/diretores', diretorRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/faltas', faltasRoutes);
app.use('/api/notas', notasRoutes);
app.use('/api/eventos', eventoRoutes);

// Uso das rotas da IA
app.use('/api/ia', iaRoutes);
app.use('/api/ia', iaSalvarRoute);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('Servidor do Sistema de Gestão Escolar com IA está rodando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

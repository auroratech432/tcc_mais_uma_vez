// Importando a conexão com o banco de dados
const db = require('../config/db');

// Controlador para lidar com operações de turmas

// Buscar todas as turmas
exports.getAllTurmas = (req, res) => {
  const sql = 'SELECT * FROM turmas';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar turmas:', err);
      return res.status(500).json({ message: 'Erro ao buscar turmas.' });
    }
    res.json(results);
  });
};

// Buscar uma turma pelo ID
exports.getTurmaById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM turmas WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao buscar turma:', err);
      return res.status(500).json({ message: 'Erro ao buscar turma.' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Turma não encontrada.' });
    }
    res.json(result[0]);
  });
};

// Criar uma nova turma
exports.createTurma = (req, res) => {
  const { serie, turma } = req.body;
  const sql = 'INSERT INTO turmas (serie, turma) VALUES (?, ?)';
  db.query(sql, [serie, turma], (err, result) => {
    if (err) {
      console.error('Erro ao criar turma:', err);
      return res.status(500).json({ message: 'Erro ao criar turma.' });
    }
    res.status(201).json({ message: 'Turma criada com sucesso!' });
  });
};

// Atualizar uma turma existente
exports.updateTurma = (req, res) => {
  const { id } = req.params;
  const { serie, turma } = req.body;
  const sql = 'UPDATE turmas SET serie = ?, turma = ? WHERE id = ?';
  db.query(sql, [serie, turma, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar turma:', err);
      return res.status(500).json({ message: 'Erro ao atualizar turma.' });
    }
    res.json({ message: 'Turma atualizada com sucesso!' });
  });
};

// Deletar uma turma
exports.deleteTurma = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM turmas WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar turma:', err);
      return res.status(500).json({ message: 'Erro ao deletar turma.' });
    }
    res.json({ message: 'Turma deletada com sucesso!' });
  });
};

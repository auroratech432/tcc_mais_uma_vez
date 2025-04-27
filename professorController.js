// Importando a conexão com o banco de dados
const db = require('../config/db');

// Controlador para lidar com operações de professores

// Buscar todos os professores
exports.getAllProfessores = (req, res) => {
  const sql = 'SELECT * FROM professores';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar professores:', err);
      return res.status(500).json({ message: 'Erro ao buscar professores.' });
    }
    res.json(results);
  });
};

// Buscar um professor pelo ID
exports.getProfessorById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM professores WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao buscar professor:', err);
      return res.status(500).json({ message: 'Erro ao buscar professor.' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Professor não encontrado.' });
    }
    res.json(result[0]);
  });
};

// Criar um novo professor
exports.createProfessor = (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = 'INSERT INTO professores (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao criar professor:', err);
      return res.status(500).json({ message: 'Erro ao criar professor.' });
    }
    res.status(201).json({ message: 'Professor criado com sucesso!' });
  });
};

// Atualizar um professor existente
exports.updateProfessor = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const sql = 'UPDATE professores SET nome = ?, email = ?, senha = ? WHERE id = ?';
  db.query(sql, [nome, email, senha, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar professor:', err);
      return res.status(500).json({ message: 'Erro ao atualizar professor.' });
    }
    res.json({ message: 'Professor atualizado com sucesso!' });
  });
};

// Deletar um professor
exports.deleteProfessor = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM professores WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar professor:', err);
      return res.status(500).json({ message: 'Erro ao deletar professor.' });
    }
    res.json({ message: 'Professor deletado com sucesso!' });
  });
};

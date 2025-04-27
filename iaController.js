// Importando a conexão com o banco de dados
const db = require('../config/db');

// Controlador para lidar com operações relacionadas à IA de geração de horários

// Rota para receber a grade gerada pela IA (simulação inicial)
exports.gerarGrade = (req, res) => {
  try {
    // Aqui no futuro poderá rodar a IA diretamente do backend
    res.json({ message: 'Geração de grade iniciada (simulação).' });
  } catch (error) {
    console.error('Erro ao gerar grade:', error);
    res.status(500).json({ message: 'Erro ao gerar grade.' });
  }
};

// Rota para salvar a grade de horários gerada no banco de dados
exports.salvarGrade = (req, res) => {
  const grade = req.body; // Recebe a grade gerada pela IA via frontend

  if (!Array.isArray(grade)) {
    return res.status(400).json({ message: 'Formato de dados inválido. Esperado um array de horários.' });
  }

  const insertPromises = grade.map(item => {
    const sql = `
      INSERT INTO horarios (turno, dia_semana, horario_aula, professor_id, sala_id, disciplina, turma_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      item.turno,
      item.dia_semana,
      item.horario_aula,
      item.professor_id,
      item.sala_id || null,
      item.disciplina,
      item.turma_id
    ];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Erro ao inserir horário:', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });

  Promise.all(insertPromises)
    .then(() => {
      res.status(201).json({ message: 'Grade de horários salva com sucesso!' });
    })
    .catch(error => {
      console.error('Erro ao salvar grade:', error);
      res.status(500).json({ message: 'Erro ao salvar grade de horários.' });
    });
};

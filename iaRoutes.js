// Importando o Express e o Controller da IA
const express = require('express');
const router = express.Router();
const iaController = require('../controllers/iaController');

// Rota para gerar a grade de horários
router.get('/gerar', iaController.gerarGrade);

// Rota para salvar a grade de horários
router.post('/salvar', iaController.salvarGrade);

module.exports = router;

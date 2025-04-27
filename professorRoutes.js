// Importando o Express e o Controller do Professor
const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Rotas de Professores

// Buscar todos os professores
router.get('/', professorController.getAllProfessores);

// Buscar professor por ID
router.get('/:id', professorController.getProfessorById);

// Criar novo professor
router.post('/', professorController.createProfessor);

// Atualizar professor existente
router.put('/:id', professorController.updateProfessor);

// Deletar professor
router.delete('/:id', professorController.deleteProfessor);

module.exports = router;

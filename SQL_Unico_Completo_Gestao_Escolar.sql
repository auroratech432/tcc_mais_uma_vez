-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS sei_database;
USE sei_database;

-- Tabela de Diretores
CREATE TABLE IF NOT EXISTS diretores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de Professores
CREATE TABLE IF NOT EXISTS professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de Turmas
CREATE TABLE IF NOT EXISTS turmas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    serie VARCHAR(50) NOT NULL,
    turma VARCHAR(50) NOT NULL
);

-- Tabela de Alunos
CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    turma_id INT,
    FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

-- Tabela de Notas
CREATE TABLE IF NOT EXISTS notas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    disciplina VARCHAR(100) NOT NULL,
    nota DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

-- Tabela de Faltas
CREATE TABLE IF NOT EXISTS faltas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    data DATE NOT NULL,
    motivo TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

-- Tabela de Eventos
CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    data DATE NOT NULL
);

-- Tabela de Horários (Grade Gerada pela IA)
CREATE TABLE IF NOT EXISTS horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    turno VARCHAR(50) NOT NULL,
    dia_semana VARCHAR(50) NOT NULL,
    horario_aula VARCHAR(50) NOT NULL,
    professor_id INT,
    sala_id INT,
    disciplina VARCHAR(100) NOT NULL,
    turma_id INT,
    FOREIGN KEY (professor_id) REFERENCES professores(id),
    FOREIGN KEY (turma_id) REFERENCES turmas(id)
);
-- Dicas importantes para usar o arquivo
--Rodar ele todo de uma vez no MySQL (Workbench, phpMyAdmin, DBeaver, etc.).

--Certificar que o MySQL está rodando antes de executar.

--Depois de rodar o script, o banco estará pronto para uso completo do sistema.


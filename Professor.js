// Definindo o modelo do Professor

class Professor {
    constructor(id, nome, email, senha) {
      this.id = id;         // ID único do professor
      this.nome = nome;     // Nome do professor
      this.email = email;   // Email institucional do professor
      this.senha = senha;   // Senha de acesso do professor
    }
  }
  
  module.exports = Professor;
  
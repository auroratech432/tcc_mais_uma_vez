// Importação da biblioteca mysql2
const mysql = require('mysql2');

// Criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'http://localhost:3000',          // Endereço do servidor MySQL (normalmente localhost)
  user: 'root',                // Usuário padrão do XAMPP/MySQL
  password: 'cimatec',                // Senha do MySQL 
  database: 'sei_database'     // Nome do banco de dados 
});

// Exportação da conexão para ser utilizada nos controladores e rotas
module.exports = connection;

//IMPORTANTE
/*Se der erro de conexão → Verificar se o server.js está rodando (npm start ou node server.js).

Se der erro 404 → Verificar se a rota correta foi usada.

Se der erro de banco → Verificar se o MySQL está iniciado (XAMPP, MAMP, etc.).

Se quiser depois levar para produção → Ajustar variáveis de ambiente (tipo .env para senha de banco).*/
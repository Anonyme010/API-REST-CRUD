// Ce fichier gère la connexion à la base de données et l'exporte pour l'utiliser dans d'autres fichiers
const mysql = require('mysql2/promise');

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  database: 'mydatabaseREST1',
};

async function getConnection() {
  const connection = await mysql.createConnection(connectionConfig);
  return connection;
}

module.exports = { getConnection };

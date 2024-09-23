import mysql from "mysql2/promise"

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: "mysql.hallmap.cn", // Substitua pelo seu host MySQL
    user: "hallmap", // Substitua pelo seu usuário MySQL
    password: "hallmap24", // Substitua pela sua senha MySQL
    database: "hallmap" // Substitua pelo seu banco de dados MySQL
  })

  return connection
}

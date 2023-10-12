const mysql = require("mysql2")

export default connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "my-secret-pw",
  database: "PUBLIC",
  port: 3307,
})

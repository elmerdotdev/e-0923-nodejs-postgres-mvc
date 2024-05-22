const { Pool } = require('pg')

// Create a new instance of a pool connection
const pool = new Pool({
  user: 'mvcuser',
  host: 'localhost',
  database: 'mvc_db',
  password: '12345',
  port: 5432
})

module.exports = pool
const { Client } = require('pg')

const connectToDatabase = async () => {
  const client = new Client({
    user: 'mvcuser', // your postgres user
    host: 'localhost', // your postgres host
    database: 'mvc_db', // your postgres db
    password: '12345', // your postgres user pw
    port: 5432 // your postgres port
  })

  await client.connect()
  return client
}

module.exports = connectToDatabase
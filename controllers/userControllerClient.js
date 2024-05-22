const connectToDatabase = require('../models/userModelClient')

// Get all users
const getUsers = async (req, res) => {
  const client = await connectToDatabase()

  try {
    const response = await client.query('SELECT * FROM persons')
    res.status(200).json(response.rows)
  } catch (err) {
    res.status(500).send(err.message)
  } finally {
    client.end()
  }
}

// Get user by id
const getUserById = async (req, res) => {
  const client = await connectToDatabase()

  try {
    const { id } = req.params
    const result = await client.query(`SELECT * FROM persons WHERE id = ${id}`)
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0])
    } else {
      res.status(404).send('User not found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  } finally {
    client.end()
  }
}

// Add user
const addUser = async (req, res) => {
  const client = await connectToDatabase()

  try {
    const { fullname, email, age } = req.body
    await client.query(`INSERT INTO persons (fullname, email, age) VALUES ('${fullname}', '${email}', ${age})`)
    res.status(201).send('User created!')
  } catch (err) {
    res.status(500).send(err.message)
  } finally {
    client.end()
  }
}

// Update user by id
const updateUserById = async (req, res) => {
  const client = await connectToDatabase()

  try {
    const { id } = req.params
    const { fullname, email, age } = req.body
    await client.query(`UPDATE persons SET fullname = '${fullname}', email = '${email}', age = ${age} WHERE id = ${id}`)
    res.status(200).send('User updated!')
  } catch (err) {
    res.status(500).send(err.message)
  } finally {
    client.end()
  }
}

// Delete user by id
const deleteUser = async (req, res) => {
  const client = await connectToDatabase()

  try {
    const { id } = req.params
    await client.query(`DELETE FROM persons WHERE id = ${id}`)
    res.send('User deleted!')
  } catch (err) {
    res.status(500).send(err.message)
  } finally {
    client.end()
  }
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUser
}
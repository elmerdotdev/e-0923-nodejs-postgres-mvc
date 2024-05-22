const pool = require('../models/userModelPool.js')

// Get all users
const getUsers = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM persons`)
    res.status(200).json(result.rows)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Get user by id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(`SELECT * FROM persons WHERE id = ${id}`)
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0])
    } else {
      res.status(404).send('User not found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Add user
const addUser = async (req, res) => {
  try {
    const { fullname, email, age } = req.body
    await pool.query(`INSERT INTO persons (fullname, email, age) VALUES ('${fullname}', '${email}', ${age})`)
    res.status(201).send('User created!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Update user by id
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params
    const { fullname, email, age } = req.body
    await pool.query(`UPDATE persons SET fullname = '${fullname}', email = '${email}', age = ${age} WHERE id = ${id}`)
    res.status(200).send('User updated!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Delete user by id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query(`DELETE FROM persons WHERE id = ${id}`)
    res.send('User deleted!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUser
}
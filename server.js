const express = require('express')
const app = express()
const PORT = 4000
const userRoutes = require('./routes/userRoutes')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use('/users', userRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
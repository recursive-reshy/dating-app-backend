import express from 'express'
import connectDb from './db/connect.js'

import person from './routes/person.js'

// App config
const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use( express.json() )

app.get( '/', ( req, res ) => res.status(200).send('Health check') )

// Routes
app.use( '/api/v1/person', person )

const start = async () => {
  try {
    await connectDb( process.env.MONGO_URI )
    app.listen( PORT, () => console.log(`Server is running on port ${PORT}`) )
  } catch (error) {
    console.error(error)
  }
}

start()
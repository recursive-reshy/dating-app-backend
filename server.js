import express from 'express'
import connectDb from './db/connect.js'

// App config
const app = express()
const PORT = process.env.PORT || 8000

app.get( '/', ( req, res ) => res.status(200).send('Health check') )

const start = async () => {
  try {
    await connectDb( process.env.MONGO_URI )
    app.listen( PORT, () => console.log(`Server is running on port ${PORT}`) )
  } catch (error) {
    console.error(error)
  }
}

start()
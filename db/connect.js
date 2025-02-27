import mongoose from 'mongoose'

const connectDb = uri => mongoose.connect(
  uri,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

export default connectDb
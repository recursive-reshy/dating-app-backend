import mongoose from 'mongoose'

const PersonSchema = mongoose.Schema( {
    name: String,
    imgUrl: String
} )

export default mongoose.model( 'Person', PersonSchema )
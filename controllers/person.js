import asyncWrapper from '../middleware/asyncWrapper.js'

import Person from '../models/Person.js'

const getAllPeople = asyncWrapper( async ( req, res ) => {
    const people = await Person.find( {} )
    res.status(200).json( { people } )
} )

const createPerson = asyncWrapper( async ( req, res ) => {
    const people = req.body
    
    await Promise.all( people.map( person => Person.create( person ) ) )
    res.status(201).json( { people } )
} )

export {
  getAllPeople,
  createPerson
}
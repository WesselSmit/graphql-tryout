const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const server = express()
const PORT = 4000


mongoose.connect('mongodb+srv://wessel:test123@intro-to-graphql.kv1mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => console.log('connected to database'))


server
  .use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
  .listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

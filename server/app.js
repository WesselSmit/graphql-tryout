const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const server = express()
const PORT = 4000


server
  .use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
  .listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BookList from '../components/BookList'
import AddBook from '../components/AddBook'


const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })


export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>My book list</h1>

        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

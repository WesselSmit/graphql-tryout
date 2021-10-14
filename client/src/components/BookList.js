import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


const getBooksQuery = gql`
{
  books {
    name
    id
    author {
      name
    }
  }
}
`


function BookList(props) {
  return (
    <div>
      <ul id="book-list">
        { !props.data.loading &&
            props.data.books.map(book => (
              <li key={book.id}>{ book.name } by { book.author.name }</li>
            )
          )
        }

        { props.data.loading &&
          <li>Loading books...</li>
        }
      </ul>
    </div>
  )
}


export default graphql(getBooksQuery)(BookList)

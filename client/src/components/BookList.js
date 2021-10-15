import { useState } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'


function BookList(props) {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div>
      <ul id="book-list">
        { !props.data.loading &&
            props.data.books.map(book => (
              <li
                key={book.id}
                onClick={() => setSelectedBook(book.id)}
              >{ book.name }</li>
            )
          )
        }

        { props.data.loading &&
          <li>Loading books...</li>
        }
      </ul>

      <BookDetails bookId={selectedBook} />
    </div>
  )
}


export default graphql(getBooksQuery)(BookList)

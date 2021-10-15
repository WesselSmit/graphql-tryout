import { useState } from 'react'
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'


function AddBook(props) {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [author, setAuthor] = useState('')

  const submitForm = e => {
    e.preventDefault()
    props.addBookMutation({
      variables: {
        name,
        genre,
        authorId: author
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onInput={e => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onInput={e => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthor(e.target.value)}>
          <option>Select author</option>
          { !props.getAuthorsQuery.loading &&
              props.getAuthorsQuery.authors.map(author => (
                <option value={author.id} key={author.id}>{author.name}</option>
              )
            )
          }

        { props.getAuthorsQuery.loading &&
          <option disabled>Loading authors...</option>
        }
        </select>
      </div>

      <button>Add</button>
    </form>
  )
}


export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)

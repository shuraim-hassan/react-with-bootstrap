import React, { useState } from 'react'
import BookStore from '../Components/BookList'
import { Books } from '../Components/Books';

const PublishBookStore = () => {
  const [login, SetLogin] = useState(false); //set Login Values

  let arrOfBooks = () => {
    return Books.map(book => {
      return <BookStore key={book.id} {...book} />
    })
  }

  return (
    <>
      <section className="container card-body card">
        <div>
          <button onClick={() => { SetLogin(!login) }}>{login === true ? 'Hide' : 'Show'}</button>
          {login === true ? arrOfBooks() : null}
        </div>
      </section>

    </>
  )
}

export default PublishBookStore;

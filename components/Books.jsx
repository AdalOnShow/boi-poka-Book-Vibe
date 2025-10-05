import { use } from "react"
import Book from "./Book"

const Books = ({ data }) => {

  const books = use(data)

  return (
    <div>
      <h2 className="!font-playfairDisplay font-bold text-[40px] text-center mb-9">Books</h2>

      <div className="grid grid-cols-3 gap-6 mb-4">
        {
          books.map((book) => (
            <Book key={book.bookId} data={book} />
          ))
        }</div>
    </div>
  )
}

export default Books
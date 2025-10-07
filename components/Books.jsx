import { useState } from "react"
import useData from "../Hooks/useData"
import Book from "./Book"

const Books = () => {
  const [search, setSearch] = useState('')
  const [books] = useData()

  const trimmedSearch = search.trim().toLowerCase()

  const filteredBooks = trimmedSearch ? books.filter(book => book.bookName.toLowerCase().includes(trimmedSearch) || book.author.toLowerCase().includes(trimmedSearch)) : books

  return (
    <div>
      <h2 className="!font-playfairDisplay font-bold text-[40px] text-center mb-9">Books</h2>

      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl">Total ({books.length}) Found</h2>
        <label className="input">
          <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search A Book Or Author" value={search} />
        </label>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        {
          filteredBooks.map((book) => (
            <Book key={book.bookId} data={book} />
          ))
        }</div>
    </div>
  )
}

export default Books
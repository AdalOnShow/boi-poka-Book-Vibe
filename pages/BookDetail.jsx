import { useLoaderData, useParams } from "react-router"

const BookDetail = () => {

  const id = parseInt(useParams().id);
  const data = useLoaderData()
  const { bookName, author, image, review, totalPages, publisher, category, tags, yearOfPublishing, rating } = data.find(bk => bk.bookId === id)


  return (
    <div className="grid grid-cols-2 gap-12 my-14">
      <div className="p-16 bg-[#131313]/5 rounded-2xl">
        <img src={image} alt={bookName} className="w-full h-auto" />
      </div>
      <div className="">
        <h2 className="!font-playfairDisplay font-bold text-[40px]">{bookName}</h2>
        <p className="font-medium text-xl !text-[#131313]/80 mt-4 mb-6">By : {author}</p>
        <div className="w-full border border-[#131313]/15" />
        <p className="font-medium text-xl my-4">{category}</p>
        <div className="w-full border border-[#131313]/15" />
        <p className="text-[#131313]/70 my-6"><span className="font-bold">Review :</span> {review}</p>
        <div className="flex items-center gap-4">
          <p className="font-bold">Tags</p>
          {tags.map((tag, idx) => <span key={idx} className="px-4 py-2 bg-[#23BE0A]/5 rounded-full font-medium !text-[#23BE0A]">#{tag}</span>)}
        </div>
        <div className="w-full border border-[#131313]/15 my-4" />
        <div className="grid grid-cols-2 max-w-[350px] gap-14">
          <div className="text-[#131313]/70 space-y-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold space-y-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-[50px]">
          <button className="btn bg-white border-[#131313]/30 font-semibold">Read</button>
          <button className="btn bg-[#50B1C9] !text-white">Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
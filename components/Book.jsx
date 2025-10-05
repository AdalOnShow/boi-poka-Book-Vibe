import star from '../src/assets/star.png'

const Book = ({ data }) => {

  const { bookName, image, author, category, rating, tags } = data;

  return (
    <div className="border border-[#dcdcdc] p-6 rounded-2xl">
      <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center py-8 h-[230px]">
        <img src={image} alt={bookName} className="max-h-full w-auto" />
      </div>

      <div className="pt-6">
        <div className="flex gap-3">
          {
            tags.map((tag, index) => (
              <div key={index} className="bg-[#23BE0A]/5 text-[#23BE0A] font-medium px-4 py-[7px] rounded-full">{tag}</div>
            ))
          }
        </div>
        <h2 className="my-4 !font-playfairDisplay text-2xl font-bold text-[#131313]">{bookName}</h2>
        <h4 className="font-medium text-[#131313]">{author}</h4>
        <div className="w-full border border-[#131313]/15 my-5 border-dashed" />
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-[#131313]">{category}</h4>
          <div className="flex justify-center items-center gap-2">
            <h4 className="font-medium text-[#131313]">{rating}</h4>
            <img src={star} alt="" className='size-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
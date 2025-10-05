import bookImg from '../src/assets/book.png'

const Banner = () => {
  return (
    <div className='mt-12 mb-24 bg-[#131313]/5 rounded-3xl px-32 py-20 flex justify-between items-center'>
      <div>
        <h1 className='!font-playfairDisplay font-bold text-6xl/20 text-[#131313] mb-12'>Books to freshen up <br /> your bookshelf</h1>
        <button className='btn bg-[#23BE0A] py-7'>View The List</button>
      </div>
      <div>
        <img src={bookImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
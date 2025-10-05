import bookImg from '../src/assets/books.jpg'

const Banner = () => {
  return (
    <div>
      <div>
        <h1>Books to freshen up your bookshelf</h1>
        <button className='btn btn-primary'>View The List</button>
      </div>
      <div>
        <img src={bookImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
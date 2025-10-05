import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
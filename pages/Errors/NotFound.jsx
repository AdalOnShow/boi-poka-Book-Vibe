import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[60dvh] flex justify-center items-center text-4xl font-semibold">
        404 || Path NotFound
      </div>
      <Footer />
    </>
  )
}

export default NotFound
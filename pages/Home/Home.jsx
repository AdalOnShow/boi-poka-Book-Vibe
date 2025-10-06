import { Suspense } from "react"
import Banner from "../../components/Banner"
import Books from "../../components/Books"

const booksDataProm = fetch("/booksData.json").then(res => res.json())

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<p>Loading....</p>}>
        <Books data={booksDataProm} />
      </Suspense>
    </div>
  )
}

export default Home
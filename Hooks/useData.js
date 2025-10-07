import axios from "axios"
import { useEffect, useState } from "react"

const useData = () => {
  const [booksData, setBooksData] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios('../booksData.json')
      .then(data => setBooksData(data.data))
      .catch(err => setErrors(err))
      .finally(() => setLoading(false))
  }, [])


  return [booksData, loading, errors]

}

export default useData
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url, type, term, token)  {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`${url}/${type}?time_range=${term}`, {
            headers:    {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() =>  {
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}

export default useFetch
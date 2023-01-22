import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(type, term, token)  {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.spotify.com/v1/me/top${type}?time_range=${term}`, {
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
    }, [])

    return { data, loading, error }
}

export default useFetch
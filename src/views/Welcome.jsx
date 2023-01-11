import useFetch from '../api/useFetch'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuthorize } from '../redux/slices/selectors/selector'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

function Welcome() {
    const [user, setUser] = useState("")
    const { value } = useSelector(getAuthorize)
    const navigateTo = useNavigate()

    const userData = useCallback(async () => {
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${value.access_token}`,
                }
            })
            setUser(data.display_name)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        userData()
    }, [])


    const handleSpotifyLogout = () => {
        window.location.replace('http://127.0.0.1:5173/')
    }



    return (
        <div>
            {/* {user} */}
            <button onClick={handleSpotifyLogout}>Log Out</button>
            {/* <button onClick={handleSpotifyTopSongs()}>My Top Songs</button>
            <button onClick={handleSpotifyTopArtists()}>My Top Artists</button> */}
            <Link to="/top-songs">top songs</Link>
            <Link to="/top-artists">top artists</Link>
        </div>
    )
}

export default Welcome
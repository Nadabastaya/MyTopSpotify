import axios from "axios"
import { useEffect, useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { Link } from 'react-router-dom'


import { useSelector, useDispatch } from "react-redux";
import useFetch from "../api/useFetch";
/* import { getLongTerm, getMediumTerm, getShortTerm} from '../redux/slices/tops/topSongsSlice' */


function TopSongs() {

    const { value } = useSelector(getAuthorize)
    const [topSong, setTopSong] = useState([])

    const getTopSongs = async (term) => {
        try {
            const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${term}`, {
            headers: {
                Authorization: `Bearer ${value.access_token}`,
            }
        })
        console.log(data.items)
        setTopSong(data.items)          
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        getTopSongs('long_term')
    }, [])

    const render = () =>    {
        return topSong.map(tp => (
            <div key={tp?.id}>
                {console.log(tp?.album.images[0].url)}
                <img src={tp?.album.images[2].url} /> {tp?.name} - {tp?.artists[0].name}
            </div>
        ))
    }

    return (
        <div>
            <div>
                <Link onClick={() => { getTopSongs('long_term') }}>All Time </Link>
                <Link onClick={() => { getTopSongs('medium_term') }}>Last 6 Month </Link>
                <Link onClick={() => { getTopSongs('short_term') }}>Last Month</Link>
            </div>
            <div>
                {render()}
            </div>
          
           
        </div>
    )
}

export default TopSongs
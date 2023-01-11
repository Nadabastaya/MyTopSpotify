import axios from "axios"
import { useEffect, useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { Link } from 'react-router-dom'


import { useSelector, useDispatch } from "react-redux";
import useFetch from "../api/useFetch";
/* import { getLongTerm, getMediumTerm, getShortTerm} from '../redux/slices/tops/topSongsSlice' */


function TopArtists() {

    const { value } = useSelector(getAuthorize)
    const [topArtists, setTopArtists] = useState([])

    const getTopArtists = async (term) => {
        try {
            const { data } = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${term}`, {
            headers: {
                Authorization: `Bearer ${value.access_token}`,
            }
        })
        console.log(data.items)
        setTopArtists(data.items)          
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        getTopArtists('long_term')
    }, [])



    const render = () =>    {
        return topArtists.map(ta => (
            <div key={ta?.id}>
                <img src={ta?.images[2].url} /> {ta?.name} 
            </div>
        ))
    }

    return (
        <div>
            <div>
                <Link onClick={() => { getTopArtists('long_term') }}>All Time </Link>
                <Link onClick={() => { getTopArtists('medium_term') }}>Last 6 Month </Link>
                <Link onClick={() => { getTopArtists('short_term') }}>Last Month</Link>
            </div>
            <div>
                {render()}
            </div>
          
           
        </div>
    )
}

export default TopArtists
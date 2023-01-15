import axios from "axios"
import { useEffect, useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import TopsNav from '../components/TopsNav'
import Nav from '../components/Nav'

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

    function convertMinutes(ms) {
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ':' + (seconds < 10 ? 0 : '') + seconds
    }

    useEffect(() => {
        getTopSongs('long_term')
    }, [])

    const render = () => {
        let index = 0
        return topSong.map(tp => (
            <SongsContainer key={tp?.id}>
                <NumberSong>{index += 1}</NumberSong>
                
                    <ImageSong src={tp?.album.images[1].url} />
         

                <Song>
                    <div>
                        {tp?.name}
                    </div>
                    <Artist>
                        {tp?.artists[0].name}
                    </Artist>
                </Song>
                <Album>
                    {tp?.album.name}
                </Album>
                <Duration>
                    {convertMinutes(tp?.duration_ms)}
                </Duration>
            </SongsContainer>
        ))
    }

    return (
        <div>
            <Nav />
            <Container>
            <Title>Top Songs</Title>
            <TopsNav long_term={() => { getTopSongs('long_term') }} medium_term={() => { getTopSongs('medium_term') }} short_term={() => { getTopSongs('short_term') }}/>
       
            
            <SongsContainer>
                <NumberSong>#</NumberSong>
                <ImageSong />
                <Song>Title</Song>
                <Album>Album</Album>
                <Duration>Duration</Duration>
            </SongsContainer>
                { render() }


        </Container >
        </div>
    )
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    gap: 10px;
`

const Title = styled.span`
    font-size: 60px;
    font-family: Tahoma;  
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px; 
    color: #FFF;
    font-weight: bold;
`

const SongsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
`
const NumberSong = styled.div`
    width: 3%;
    color: #a5a5a5;
`

const ImageSong = styled.img`
    width: 100px;
    width: 7%
`

const Song = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    text-align: left;
    padding-left: 20px;
    color: #FFF;
    font-size: 17px;
`
const Artist = styled.span`
    color: #a5a5a5;
    font-size: 15px;
    padding-top: 3px;
`

const Album = styled.div`
    width: 40%;
    color: #a5a5a5;
`
const Duration = styled.div`
    width: 10%;
    color: #a5a5a5;
`
export default TopSongs
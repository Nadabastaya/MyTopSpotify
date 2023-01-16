import { useEffect, useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useSelector } from "react-redux";
import axios from "axios"

import TopsNav from '../components/TopsNav'
import Nav from '../components/Nav'
import { Container, 
        Title, 
        SongsContainer, 
        NumberSong, 
        ImageSong, 
        Song, 
        Artist, 
        Album, 
        Duration 
    } from '../styled/TopSongs'

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
            <TopsNav 
                long_term={() => { getTopSongs('long_term') }} 
                medium_term={() => { getTopSongs('medium_term') }} 
                short_term={() => { getTopSongs('short_term') }}
            />
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

export default TopSongs
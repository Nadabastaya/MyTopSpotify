import { useEffect, useState } from "react"
import { useGetSongsQuery } from '../redux/apis/topsApi'
import TopsNav from '../components/TopsNav'
import Nav from '../components/Nav'
import {
    Container,
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
    const [term, setTerm] = useState('long_term')
    const [topSong, setTopSong] = useState([])

    const { data: songs = [], isLoading, isSuccess, isError } = useGetSongsQuery(term)

    useEffect(() => {
        if (isSuccess && songs) {
            setTopSong(songs.items)
        }
    }, [isSuccess, songs, isError])

    const longTerm = () => {
        if (term === 'long_term') return
        setTerm('long_term')
        setTopSong(songs?.items)
    }

    const mediumTerm = () => {
        if (term === 'medium_term') return
        setTerm('medium_term')
        setTopSong(songs?.items)
    }

    const shortTerm = () => {
        if (term === 'short_term') return
        setTerm('short_term')
        setTopSong(songs?.items)
    }

    function convertMinutes(ms) {
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ':' + (seconds < 10 ? 0 : '') + seconds
    }

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
                    long_term={longTerm}
                    medium_term={mediumTerm}
                    short_term={shortTerm}
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
import { useEffect, useState } from "react"
import TopsNav from '../components/TopsNav'
import CardArtists from '../components/CardArtists'
import Nav from '../components/Nav'
import { Container, Title, ArtistsContainer } from '../styled/TopArtists'
import { useGetArtistsQuery } from "../redux/apis/topsApi";

function TopArtists() {
    const [term, setTerm] = useState('long_term')
    const [topArtists, setTopArtists] = useState([])

    const { data: artists = [], isLoading, isSuccess, isError } = useGetArtistsQuery(term)
 
    useEffect(() => {
        if (isSuccess && artists) {
            setTopArtists(artists.items)
        }
    }, [isSuccess, artists, isError])

    const longTerm = () => {
        if (term === 'long_term') return
        setTerm('long_term')
        setTopArtists(artists?.items)
    }

    const mediumTerm = () => {
        if (term === 'medium_term') return
        setTerm('medium_term')
        setTopArtists(artists?.items)
    }

    const shortTerm = () => {
        if (term === 'short_term') return
        setTerm('short_term')
        setTopArtists(artists?.items)
    }

    const render = () => {
        return topArtists.map(ta => (
                <CardArtists img={ta?.images[0].url} name={ta?.name} />
        ))
    }

    return (
        <div>
            <Nav />
            <Container>
                <Title>Top Artists</Title>
                <TopsNav
                    long_term={longTerm}
                    medium_term={mediumTerm}
                    short_term={shortTerm}
                />
                <ArtistsContainer>
                    {render()}
                 </ArtistsContainer>
            </Container>
        </div>
    )
}

export default TopArtists
import { useEffect, useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useSelector } from "react-redux";
import axios from "axios"
import TopsNav from '../components/TopsNav'
import CardArtists from '../components/CardArtists'
import Nav from '../components/Nav'
import { Container, Title, ArtistsContainer } from '../styled/TopArtists'

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
                    long_term={() => { getTopArtists('long_term') }}
                    medium_term={() => { getTopArtists('medium_term') }}
                    short_term={() => { getTopArtists('short_term') }}
                />
                <ArtistsContainer>
                    {render()}
                 </ArtistsContainer>
            </Container>
        </div>
    )
}

/* const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding-bottom: 20px;
    height: 100vh;
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
const ArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
` */
export default TopArtists
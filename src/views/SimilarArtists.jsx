import { useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useSelector } from "react-redux";
import axios from "axios";

import CardArtists from '../components/CardArtists'
import Nav from '../components/Nav'
import { 
    Container, 
    Title, 
    ArtistsContainer, 
    FormContainer, 
    TextBox, 
    Button } from '../styled/SimilarArtists'

function SimilarArtists()   {
    const [artistKey, setArtistKey] = useState("")
    const [artists, setArtists] = useState([])
    const { value } = useSelector(getAuthorize)

    const getSimilarArtists = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${value.access_token}`,
            },
            params: {
                q: artistKey,
                type: 'artist'
            }
        })
        setArtists(data.artists.items)
        console.log(data.artists.items)        
        } catch (error) {
            console.log(error)
        }
    }

    const render = () =>    {
        return artists.map(a =>  (
            a?.images[0] ? 
                <CardArtists img={a?.images[0].url} name={a?.name} /> 
            :
            <CardArtists  name={a?.name} />
        ))
    }

    return (
        <div>
            <Nav />
            <Container>
            <Title>Similar Artists</Title>
            <FormContainer onSubmit={getSimilarArtists}>
                <TextBox type="text" onChange={e => setArtistKey(e.target.value)}/>
                <Button type={"submit"}>GET IT</Button>
            </FormContainer>
            <ArtistsContainer>
                {render()}
            </ArtistsContainer>
        </Container>
        </div>
    )
}

export default SimilarArtists
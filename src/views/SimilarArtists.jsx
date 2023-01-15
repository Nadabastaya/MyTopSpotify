import { useState } from "react"
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CardArtists from '../components/CardArtists'
import styled from 'styled-components'
import Nav from '../components/Nav'

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
        return artists.map(a => (
            <CardArtists img={a?.images[0].url} name={a?.name} />
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
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
    
    flex-wrap: wrap;
`
const FormContainer = styled.form`
    display: flex;
    gap: 10px;
    justify-content: center;
`

const TextBox = styled.input`
    width: 9.5vw;
    height: 3.3vh;
    border-radius: 5px;
    border: 1px solid #FFF;
`

const Button = styled.button`
  background-color: #171717;
  border: 1px solid #FFF;
  border-radius: 5px;
  width: 10vw;
  height: 4vh;
  color: #FFF;

`

export default SimilarArtists
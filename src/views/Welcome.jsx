import useFetch from '../api/useFetch'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuthorize } from '../redux/slices/selectors/selector'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import CardWelcome from '../components/CardWelcome'
import styled from 'styled-components'
import imgHeader from '../assets/img/welcome-header-3.jpg'

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
        <Container>
            <WelcomeBody>
                <WelcomeTitle>
                    Lorem ipsum dolor sit.
                </WelcomeTitle>
                <WelcomeText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea ad facilis molestias perferendis nam quia. Quas, ipsam accusantium. Officiis explicabo nemo cumque a iusto labore iure voluptatum deleniti perspiciatis laboriosam. Commodi, maiores. Porro molestiae dolores quisquam modi debitis fuga expedita ratione, nulla dolore nobis veniam officiis quam laboriosam eligendi quidem ullam exercitationem provident necessitatibus, perferendis natus, quos sequi alias.
                </WelcomeText>
                <CardContainer>
                <CardWelcome link="/top-songs" name="Top Songs" />
                <CardWelcome link="/top-artists" name="Top Artists" />
                <CardWelcome link="/similar-artists" name="Similar Artists" />
                </CardContainer>

                {/* <div>
                    <button onClick={handleSpotifyLogout}>Log Out</button>
                </div> */}
            </WelcomeBody>



        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 100vh;
`

const WelcomeBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 1000px;
`

const WelcomeTitle = styled.span`
    font-size: 60px;
    font-family: Tahoma;  
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px; 
    color: #FFF;
    font-weight: bold;
`

const WelcomeText = styled.span`
    color: #a2a2a2;
    font-size: 20px;
    padding: 15px
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default Welcome
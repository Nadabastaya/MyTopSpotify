import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import CardWelcome from '../components/CardWelcome'
import { Container, WelcomeBody, WelcomeTitle, WelcomeText, CardContainer } from '../styled/Welcome'


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


export default Welcome
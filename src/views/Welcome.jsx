import { useSelector } from 'react-redux'
import { getAuthorize } from '../redux/slices/selectors/selector'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import CardWelcome from '../components/CardWelcome'
import { Container, WelcomeBody, WelcomeTitle, WelcomeText, CardContainer } from '../styled/Welcome'


function Welcome() {
    const [user, setUser] = useState("")
    const { value } = useSelector(getAuthorize)

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

    return (
        <Container>
            <WelcomeBody>
                <WelcomeTitle>
                    Welcome to Top-pify
                </WelcomeTitle>
                <WelcomeText>
                    Welcome {user}, discover which were the songs that you have enjoyed the most, the most listened to artists and let us recommend a couple of artists that may be to your liking
                </WelcomeText>
                <CardContainer>
                <CardWelcome link="/top-songs" name="Top Songs" text="Discover your most played songs"/>
                <CardWelcome link="/top-artists" name="Top Artists" text="Discover your most listened artists"/>
                <CardWelcome link="/similar-artists" name="Similar Artists" text="We recommend an artist for you to listen to"/>
                </CardContainer>
            </WelcomeBody>
        </Container>
    )
}

export default Welcome
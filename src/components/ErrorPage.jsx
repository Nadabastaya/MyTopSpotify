import { Container, Title, Button } from '../styled/App'

function ErrorPage() {

    const handleBackHome = () =>    {
        window.location.replace(import.meta.env.VITE_REDIRECT_URI)
    }
        
    return (
        <Container>
            <Title>404 Not Found</Title>
            <Button onClick={handleBackHome}>Back Home</Button>
        </Container >
    )
}

export default ErrorPage
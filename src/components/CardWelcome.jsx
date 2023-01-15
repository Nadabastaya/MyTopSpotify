import styled from 'styled-components'
import { Link } from 'react-router-dom'


const CardWelcome = (props) => {
    return (
        <CardWrapper>
            <CardHeader>
               <CardImage src="https://i.scdn.co/image/ab6761610000e5ebd84fd6ae9ccfc6206ea6711e" />
            </CardHeader>
            <CardBody>
                <CardLink to={props.link}>
                    {props.name}
                </CardLink>
                <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae.
                </CardText>
            </CardBody>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    background-color: #171717;
    width: 300px;
    padding: 0 0 30px;
    margin: 48px auto 0;
    text-align: center;
    border-radius: 10px;
`

const CardHeader = styled.header`
    padding-top: 15px;
    padding-bottom: 15px;
`

const CardImage = styled.img`
    width: 270px;
    border-radius: 5px
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px; 
    text-align: left;
    color: #a2a2a2;
`

const CardLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 25px;
`

const CardText = styled.span`
    padding-top: 10px;
`

export default CardWelcome
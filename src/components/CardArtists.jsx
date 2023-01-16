import styled from 'styled-components'


const CardArtists = (props) => {
    return (
        <CardWrapper>
            <CardHeader>
               {props.img ?
                    <CardImage src={props.img}  />
                    :
                    <CardAlt />
                }
            </CardHeader>
            <CardBody>
                <CardLink>
                    {props.name}
                </CardLink>
                <CardText>
                    Artist
                </CardText>
            </CardBody>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    background-color: #171717;
    width: 225px;
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
    width: 180px;
    border-radius: 50%;
    padding: 5px;
    aspect-ratio: 1/1;
    background-color: #171717;
`
const CardAlt = styled.div`
    background-color: #171717
    width: 180px;
    padding: 5px;
    aspect-ratio: 1/1;
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px; 
    text-align: left;
    color: #a2a2a2;
`

const CardLink = styled.span`
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 25px;
`

const CardText = styled.span`
    padding-top: 10px;
`

export default CardArtists
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const TopsNav = (props) =>  {
    return(
        <TopNavContainer>
            <Item onClick={props.long_term}>All Time</Item>
            <Item onClick={props.medium_term}>Last 6 Month</Item>
            <Item onClick={props.short_term}>Last Month</Item>
        </TopNavContainer>
    )
}

const TopNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    font-size: 30px;
    padding-bottom: 50px;
`
const Item = styled(NavLink)`
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 25px;
    
`

export default TopsNav

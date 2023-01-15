import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () =>  {
    return(
        <NavContainer>
            
            <Items to="/top-songs">
                <div>🎵</div>
                Top Songs
            </Items>
            <Items to="/top-artists">
                <div>🎙️</div>
                Top Artists
            </Items>
            <Items to="/similar-artists">
                <div>👨‍🎤</div>
                Similar Artists
            </Items>
        </NavContainer>
    )
}

const NavContainer = styled.div`
 
    background-color: #121212;
    right: 0;
    position: fixed;
    width: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 50px;
`
const Items = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding: 1em;
    color: #FFF;
    
`

export default Nav

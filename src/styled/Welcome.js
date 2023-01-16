import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 100vh;
`

export const WelcomeBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 1000px;
`

export const WelcomeTitle = styled.span`
    font-size: 60px;
    font-family: Tahoma;  
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px; 
    color: #FFF;
    font-weight: bold;
`

export const WelcomeText = styled.span`
    color: #a2a2a2;
    font-size: 20px;
    padding: 15px
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
`
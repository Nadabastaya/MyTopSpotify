import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    gap: 10px;
    height: 100vh;
`

export const Title = styled.span`
    font-size: 60px;
    font-family: Tahoma;  
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px; 
    color: #FFF;
    font-weight: bold;
`

export const SongsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
`
export const NumberSong = styled.div`
    width: 3%;
    color: #a5a5a5;
`

export const ImageSong = styled.img`
    width: 100px;
    width: 7%
`

export const Song = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    text-align: left;
    padding-left: 20px;
    color: #FFF;
    font-size: 17px;
`
export const Artist = styled.span`
    color: #a5a5a5;
    font-size: 15px;
    padding-top: 3px;
`

export const Album = styled.div`
    width: 40%;
    color: #a5a5a5;
`
export const Duration = styled.div`
    width: 10%;
    color: #a5a5a5;
`
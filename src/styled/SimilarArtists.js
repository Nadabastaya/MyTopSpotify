import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding-bottom: 20px;
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
export const ArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const FormContainer = styled.form`
    display: flex;
    gap: 10px;
    justify-content: center;
`

export const TextBox = styled.input`
    width: 9.5vw;
    height: 3.3vh;
    border-radius: 5px;
    border: 1px solid #FFF;
`

export const Button = styled.button`
  background-color: #171717;
  border: 1px solid #FFF;
  border-radius: 5px;
  width: 10vw;
  height: 4vh;
  color: #FFF;

`
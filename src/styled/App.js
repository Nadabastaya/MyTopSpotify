import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
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
export const Text = styled.span`
    padding-top: 10px;
    font-size: 20px;
    padding-bottom: 100px;
    color: #a2a2a2;
    text-align: center;
`
export const Button = styled.button`
  background-color: #171717;
  border: 1px solid #FFF;
  border-radius: 5px;
  width: 10vw;
  height: 4vh;
  color: #FFF;
  font-size: 20px;
`
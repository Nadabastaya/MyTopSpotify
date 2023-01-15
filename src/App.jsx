import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { authCall } from './api/ApiCall'
import { authorize } from './redux/slices/authorize/authorizeSlice'
import { getAuthorize } from './redux/slices/selectors/selector'
import './App.css'
import styled from 'styled-components'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigateTo = useNavigate()


  const SPOTIFY_URL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&scope=user-read-private user-top-read`

  const authUser = useCallback(async (spotifyCode) => {
    try {
      let response = await authCall(spotifyCode)
      console.log(response)
      dispatch(authorize(response))
      navigateTo("/welcome");
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const spotifyCode = urlParams.get('code')
    if (spotifyCode) authUser(spotifyCode)


  }, [location.search])



  const handleSpotifyLogin = () => {
    window.location.replace(SPOTIFY_URL)
  }

  const handleSpotifyLogout = () => {
    window.location.replace(import.meta.env.VITE_REDIRECT_URI)
  }

  return (
    <Container className="App">
      <Title>MY TOP SPOTIFY</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit deleniti laborum dolor optio officiis similique aut voluptates quasi magnam at nam corporis, ullam expedita, eum dolores fuga ad velit quisquam soluta perspiciatis, hic eius esse natus. Illum, aliquid est?</Text>
      <Button onClick={handleSpotifyLogin}>Log In</Button>
      {/* <button onClick={handleSpotifyLogout}>Log Out</button> */}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 100vh;
   
`

const Title = styled.span`
    font-size: 60px;
    font-family: Tahoma;  
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px; 
    color: #FFF;
    font-weight: bold;
`
const Text = styled.span`
    padding-top: 10px;
    font-size: 20px;
    padding-bottom: 100px;
    color: #a2a2a2;
`
const Button = styled.button`
  background-color: #171717;
  border: 1px solid #FFF;
  border-radius: 5px;
  width: 10vw;
  height: 4vh;
  color: #FFF;

`
export default App

import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authCall } from './api/ApiCall'
import { authorize } from './redux/slices/authorize/authorizeSlice'
import styled from 'styled-components'
import { Container, Title, Text, Button } from './styled/App'
import './App.css'


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
      <Text>
        Do you want to know which are the songs and artists that you have listened to the most? Sign in with your spotify account to MyTopSpotify to find out!
      </Text>
      <Button onClick={handleSpotifyLogin}>Sign In</Button>
      {/* <button onClick={handleSpotifyLogout}>Log Out</button> */}
    </Container>
  )
}

export default App

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { authCall } from './api/ApiCall'
import { authorize } from './redux/slices/authorize/authorizeSlice'
import { getAuthorize } from './redux/slices/selectors/selector'
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
    window.location.replace('http://127.0.0.1:5173/')
  }

  return (
    <div className="App">
      <h1>MY TOP SPOTIFY</h1>
      <button onClick={handleSpotifyLogin}>Log In</button>
      <button onClick={handleSpotifyLogout}>Log Out</button>
    </div>
  )
}

export default App

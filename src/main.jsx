import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import Welcome from './views/Welcome'
import TopSongs from './views/TopSongs'
import TopArtists from './views/TopArtists'
import SimilarArtists from './views/SimilarArtists'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/welcome",
    element: <Welcome/>
  },
  {
    path: "/top-songs",
    element: <TopSongs/>
  },
  {
    path: "/top-artists",
    element: <TopArtists />
  },
  {
    path: "/similar-artists",
    element: <SimilarArtists />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={ store }>
      <RouterProvider router={ router } />
    </Provider>,
)

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const topsApi = createApi({
    reducerPath:  'topsongs',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().authorize.value.access_token
            if(token)   {
                headers.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: (builder) => ({
        getSongs: builder.query({
            query: (term) => `/me/top/tracks?time_range=${term}`
        }),
        getArtists: builder.query({
            query: (term) => `/me/top/artists?time_range=${term}`
        }),
        getSimilarArtists: builder.query({
            query: (artist) =>  `/search?q=${artist}&type=artist`
        })
    })
})

export const { useGetSongsQuery, useGetArtistsQuery, useGetSimilarArtistsQuery } = topsApi
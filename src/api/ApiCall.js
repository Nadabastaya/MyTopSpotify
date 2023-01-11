import axios from "axios"

const commonParams = {
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
}

export const authCall = async (code) => {
    try {
        const params = {
            grant_type: 'authorization_code',
            code,
            ...commonParams
        }

        const encodeParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&")
        console.log(encodeParams)
        const spotifyCall = await axios.post('https://accounts.spotify.com/api/token', encodeParams, {
            headers: {
                Authorization: 'Basic ' + import.meta.env.VITE_CLIENT_BASE_64,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        
        return await spotifyCall.data
    } catch (error) {
        console.log(error)
    }
}
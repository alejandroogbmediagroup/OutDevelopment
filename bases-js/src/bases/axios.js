import axios from "axios";
const apiKey = 'aBs2jAqcLs6TRN8sEYHqzfpqjWP5JPLo'
    //`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then(resp => {
//         const paquete = resp.data.data
//         console.log(paquete)
//         const { url } = paquete.images.original
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     })
//     .catch(console.log)

// giphyApi.get('/random')
//     .then(resp => {
//         const { data } = resp.data
//         const { url } = data.images.original
//         console.log(url)
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     })
//     .catch(console.log)
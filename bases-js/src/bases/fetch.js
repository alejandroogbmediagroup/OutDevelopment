const apiKey = 'aBs2jAqcLs6TRN8sEYHqzfpqjWP5JPLo'

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then(resp => {
//         resp.json()
//             .then(resp => console.log(resp))
//     })
//     .catch(err => console.error(err))

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
const body = document.querySelector('body')
const imageAuthor = document.getElementById('image-author')

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `Photo by: ${data.user.name}`
    })
    .catch(err => {
        body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg4MTQxNjd8&ixlib=rb-4.0.3&q=85")'
        imageAuthor.textContent = `Photo by: Pawel Nolbert`
    })

    
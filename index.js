const body = document.querySelector('body')
const imageAuthor = document.getElementById('image-author')

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `Photo by: ${data.user.name}`
    })
const sliders = document.querySelectorAll('.glide')

new Glide(sliders[0], { autoplay: 5000 }).mount()
new Glide(sliders[1], { autoplay: 5000 }).mount()

const linkToHow = document.getElementById('link-to-how')
const linkToStories = document.getElementById('link-to-stories')

linkToHow.addEventListener('click', () => {
  scrollTo('how-it-works')
})

linkToStories.addEventListener('click', () => {
  scrollTo('stories')
})

function scrollTo (id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  })
}
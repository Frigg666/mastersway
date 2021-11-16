const scrollTo = event => {
  event.preventDefault()
  document.getElementById(event.target.dataset.scroll)
    .scrollIntoView({behavior: "smooth"})
}

const toggleModal = event => document.getElementById(event.target.dataset.modal)
  .classList.toggle('show')

document.querySelectorAll('.nav_link, .footer_nav_link')
  .forEach(el => el.addEventListener('click',() => scrollTo(event)))

document.querySelectorAll('.modal, .btn')
  .forEach(el => el.addEventListener('click', () => toggleModal(event)))
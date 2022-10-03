
const chevron = document.querySelectorAll('.collapsible')

chevron.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle('collapsible--expanded')
  }
})
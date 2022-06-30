document.addEventListener('DOMContentLoaded', e => {
  const apiUrl = 'http://localhost:8080'
  const pageTitleDOM = document.querySelector('.app-header h1')

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      pageTitleDOM.innerHTML = data.message
    })
})

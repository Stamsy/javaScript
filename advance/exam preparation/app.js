window.addEventListener("load", solve);

function solve() {
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  }

  const list = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list')
  }
  document.getElementById('publish-btn').addEventListener('click', publish)
  document.getElementById('click-btn').addEventListener('click', clear)

  function publish(event) {
event.preventDefault()


  }
  function edit() {

  }
  function approve() {

  }
  function clear() {

  }
}

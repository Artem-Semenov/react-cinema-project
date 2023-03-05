export function smoothScroll(id) {
  if (!id) return;
  if (id === 'pageTop') {
    window.scroll({
      top: '0',
      behavior: 'smooth'
    })
  }
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })

}
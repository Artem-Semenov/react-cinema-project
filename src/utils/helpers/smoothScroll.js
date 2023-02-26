export function smoothScroll(id) {
  if (!id) return;

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })

}
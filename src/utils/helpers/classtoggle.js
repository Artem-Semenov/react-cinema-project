export function classToggle (id, className) {
if(!id) return;
document.getElementById(id)?.classList.toggle(className)
}
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const lang = localStorage.getItem('lang') || 'uz'
    document.documentElement.setAttribute('lang', lang)
  }
})
import type { DirectiveBinding } from 'vue'

interface AOSOptions {
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

function setupObserver(el: HTMLElement, options: Required<AOSOptions>) {
  const { threshold, rootMargin, once } = options

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
        if (once) observer.unobserve(el)
      } else if (!once) {
        el.classList.remove('in-view')
      }
    })
  }

  const io = new IntersectionObserver(onIntersect, { threshold, rootMargin })
  io.observe(el)
}

const directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AOSOptions | string>) {
    const value = binding.value
    const opts: AOSOptions = typeof value === 'string' ? { animation: value as any } : (value || {})
    const resolved: Required<AOSOptions> = {
      animation: opts.animation || 'fade-up',
      threshold: opts.threshold ?? 0.15,
      rootMargin: opts.rootMargin || '0px 0px -10% 0px',
      once: opts.once ?? true,
      delay: opts.delay ?? 0
    }

    // base class
    el.classList.add('aos')

    // animation modifier class
    if (resolved.animation) {
      el.classList.add(resolved.animation)
    }

    // optional delay via CSS variable
    if (resolved.delay) {
      el.style.setProperty('--aos-delay', `${resolved.delay}ms`)
    }

    setupObserver(el, resolved)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('aos', directive)
})

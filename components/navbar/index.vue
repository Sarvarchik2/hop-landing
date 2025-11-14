<template>
    <nav class="navbar" :class="{ open: menuOpen }">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Hop Taxi logo">
        </div>

        <ul class="navbar-list">
            <li>
                <a href="#about" class="nav-link" @click="scrollToSection('about')">
                    <span class="nav-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 14.77 7.22 16.7l.91-5.32L4.27 7.62l5.34-.78L12 2z"/></svg>
                    </span>
                    <span>{{ t('nav.about') }}</span>
                </a>
            </li>
            <li>
                <a href="#passengers" class="nav-link muted" @click="scrollToSection('passengers')">
                    <span class="nav-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 1.79-6 4v2h12v-2c0-2.21-2.69-4-6-4z"/></svg>
                    </span>
                    <span>{{ t('nav.passengers') }}</span>
                </a>
            </li>
            <li>
                <a href="#drivers" class="nav-link muted" @click="scrollToSection('drivers')">
                    <span class="nav-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 4h18v2H3V4zm2 4h14v12H5V8zm4 2v8h2v-8H9zm4 0v8h2v-8h-2z"/></svg>
                    </span>
                    <span>{{ t('nav.drivers') }}</span>
                </a>
            </li>
            <li>
                <a href="#support" class="nav-link muted" @click="scrollToSection('support')">
                    <span class="nav-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.4 1.25 4.55 3.22 6.03L5 21l3.35-.99C9.2 20.33 10.57 20.5 12 20.5c4.97 0 9-3.58 9-8s-4.03-8-9-8zm-1 10H8v-2h3V6h2v5h3v2h-3v3h-2v-3z"/></svg>
                    </span>
                    <span>{{ t('nav.support') }}</span>
                </a>
            </li>
        </ul>

        <div class="navbar-actions">
          
            <div class="navbar-lang">
                <select v-model="localeProxy" class="lang-select" aria-label="Language">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>
              <button class="burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu" :aria-expanded="menuOpen">
                <span></span><span></span><span></span>
            </button>
        </div>

        <div v-if="menuOpen" class="nav-backdrop" @click="menuOpen=false" />
    </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const menuOpen = ref(false)
const { locale, setLocale, t } = useI18n()

const localeProxy = computed({
    get: () => locale.value,
    set: (val) => setLocale(val)
})

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const offset = 80
        const targetPosition = element.offsetTop - offset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 1000 // длительность в ms

        let startTime: number | null = null

        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            const easeProgress = easeInOutQuad(progress)

            window.scrollTo(0, startPosition + distance * easeProgress)

            if (progress < 1) {
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation)
    }
    menuOpen.value = false
}
</script>


<style>
@import './navbar.css';
</style>
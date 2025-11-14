<template>
  <div class="hop-wrapper">
    <div v-if="showIntro" class="intro-overlay">
      <img class="intro-logo" src="@/assets/logob.svg" alt="Hop Taxi" />
    </div>
    <Navbar />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showIntro = ref(false)

onMounted(() => {
  try {
    const seen = sessionStorage.getItem('introShown')
    if (!seen) {
      showIntro.value = true
      sessionStorage.setItem('introShown', '1')
      setTimeout(() => { showIntro.value = false }, 1300)
    }
  } catch {
    // Fallback: show once without persistence
    showIntro.value = true
    setTimeout(() => { showIntro.value = false }, 1300)
  }
})
</script>


<style>
@import './app.css';
</style>
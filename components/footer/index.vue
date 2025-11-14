<template>
  <footer class="hop-footer">
    <div class="footer-inner">
      <h3 class="footer-brand">
       <img src="@/assets/logob.svg" alt="HOP taxi Logo">
      </h3>

      <div class="footer-grid">
        <!-- Telegram -->
  <div class="f-col f-telegram" v-aos>
          <div class="f-title">{{ t('footer.telegram.title') }}</div>
          <div class="f-tele-row">
            <span class="tg-icon" aria-hidden="true">
              <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="120" r="120" fill="#E8F0FF"/>
                <path d="M180.9 71.1L161.8 168.5c-1.5 7.7-6 9.6-12.1 6l-33.5-24.7-16.2 15.6c-1.8 1.8-3.4 3.4-7 3.4l2.5-36.1 65.7-59.4c2.9-2.5-0.6-3.9-4.5-1.4l-81.2 51.1-34.9-10.9c-7.6-2.4-7.8-7.6 1.6-11.2l136.5-52.6c6.3-2.9 11.8 1.5 9.8 10.9z" fill="#3094F2"/>
              </svg>
            </span>
            <a class="tg-handle" href="https://t.me/hoptaksi_bot" target="_blank" rel="noopener">{{ t('footer.telegram.handle') }}</a>
          </div>
        </div>

        <!-- Contacts -->
  <div class="f-col" v-aos :style="{'--aos-delay':'100ms'}">
          <div class="f-title">{{ t('footer.contacts.title') }}</div>
          <ul class="f-list">
            <li><a href="mailto:support@taxibot.uz">support@taxibot.uz</a></li>
            <li><a href="tel:+998777777777">+998 77 777 77 77</a></li>
            <li>Mirabad, 25A</li>
          </ul>
        </div>

        <!-- Documents -->
  <div class="f-col" v-aos :style="{'--aos-delay':'200ms'}">
          <div class="f-title">{{ t('footer.docs.title') }}</div>
          <ul class="f-list">
            <li><a href="#">{{ t('footer.docs.offer') }}</a></li>
            <li><a href="#">{{ t('footer.docs.privacy') }}</a></li>
            <li><a href="#">{{ t('footer.docs.aml') }}</a></li>
          </ul>
        </div>

        <!-- Badges -->
  <div class="f-col f-badges" v-aos :style="{'--aos-delay':'300ms'}">
          <a class="store-badge" href="#" aria-label="Google Play">
            <img src="@/assets/p.svg" alt="Get it on Google Play" />
          </a>
          <!-- <a class="store-badge" href="#" aria-label="App Store">
            <img src="@/assets/a.svg" alt="Download on the App Store" />
          </a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style>
@import './footer.css';
</style>

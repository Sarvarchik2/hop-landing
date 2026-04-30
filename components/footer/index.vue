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
          <ul class="f-list f-docs-list">
            <li v-for="doc in docs" :key="doc.file">
              <a :href="doc.file" :download="doc.filename" target="_blank" class="doc-link">
                <svg class="doc-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="doc-label">{{ doc.label }}</span>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3m0 12-4-4m4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
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
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()

const docs = computed(() => [
  { file: '/documents/offer-drivers.docx', filename: 'offer-drivers.docx', label: t('footer.docs.offer_drivers') },
  { file: '/documents/offer-passengers.docx', filename: 'offer-passengers.docx', label: t('footer.docs.offer_passengers') },
  { file: '/documents/privacy-policy.docx', filename: 'privacy-policy.docx', label: t('footer.docs.privacy') },
  { file: '/documents/kyc-aml.docx', filename: 'kyc-aml.docx', label: t('footer.docs.aml') },
])
</script>

<style>
@import './footer.css';
</style>

import { ref, computed, watch } from 'vue'

export type Locale = 'uz' | 'ru' | 'en'

const STORAGE_KEY = 'lang'
const SUPPORTED: Locale[] = ['uz', 'ru', 'en']
const DEFAULT_LOCALE: Locale = 'uz'

// Basic dictionary. Extend as needed.
const messages: Record<Locale, Record<string, string>> = {
  uz: {
    'nav.about': 'Xizmat haqida',
    'nav.passengers': 'Yo‘lovchilar uchun',
    'nav.drivers': 'Haydovchilar uchun',
    'nav.support': 'Yordam',

    'hero.title.prefix': 'Taxi Bot —',
    'hero.title.suffix': ' sayohatlarda ishonchli hamkoringiz',
    'hero.subtitle.bold': 'Tez, xavfsiz va qulay — ',
    'hero.subtitle.tail': 'komfortli safar uchun kerak hammasi',
    'hero.cta.primary': 'Yo‘lovchi bo‘lish',
    'hero.cta.secondary': 'Haydovchi bo‘lish',
    // Service section
    'service.about': "Xizmat haqida",
    'service.c1.l1': 'Tezkor qidiruv',
    'service.c1.l2': 'yaqin haydovchini',
    'service.c2.l1': 'Qulay to‘lov',
    'service.c2.l2': 'karta yoki naqd',
    'service.c3.l1': 'Xavfsizlik',
    'service.c3.l2': 'har bosqichda',
    'service.c4.l1': 'Darhol',
    'service.c4.l2': 'bildirishnomalar va treking',

    // Passengers section
    'passengers.title': 'Yo‘lovchilar uchun',
    'passengers.c1.l1': 'Aqlli aniqlash',
    'passengers.c1.l2': 'marshrutni',
    'passengers.c2.l1': 'Ochiq narx',
    'passengers.c2.l2': 'yashirin komissiyasiz',
    'passengers.c3.l1': 'Darhol bildirishnomalar',
    'passengers.c3.l2': 'haydovchi haqida',
    'passengers.cta': 'Safarni boshlash',

    // Drivers section
    'drivers.title': 'Haydovchilar uchun',
    'drivers.subtitle': 'Taxi Bot bilan daromad oling, o‘zingizga qulay vaqtda ishlang.',
    'drivers.c1': 'Ro‘yxatdan o‘ting',
    'drivers.c2': 'Tekshiruvdan o‘ting',
    'drivers.c3': 'Buyurtmalarni qabul qiling',
    'drivers.cta': 'Haydovchi bo‘lish',

    // Security section
    'security.title': 'Xavfsizlik va ishonchlilik',
    'security.c1.l1': 'Tekshirilgan',
    'security.c1.l2': 'haydovchilar',
    'security.c2.l1': '24/7',
    'security.c2.l2': 'qo‘llab-quvvatlash',
    'security.c3.l1': 'Geolokatsiya',
    'security.c3.l2': 'real vaqt rejimida',
    'security.c4.l1': 'Xavfsiz',
    'security.c4.l2': 'onlayn-to‘lovlar',

    // Footer
    'footer.telegram.title': 'Bizning Telegram — Bot',
    'footer.telegram.handle': '@Hoptaxi',
    'footer.contacts.title': 'Kontaktlar',
    'footer.docs.title': 'Hujjatlar',
    'footer.docs.offer': 'Ommaviy oferta',
    'footer.docs.privacy': 'Maxfiylik siyosati',
    'footer.docs.aml': 'AML/KYC diskleymeri',
  },
  ru: {
    'nav.about': 'О сервисе',
    'nav.passengers': 'Для пассажиров',
    'nav.drivers': 'Для водителей',
    'nav.support': 'Поддержка',

    'hero.title.prefix': 'Taxi Bot —',
    'hero.title.suffix': ' ваш надёжный партнёр в поездках',
    'hero.subtitle.bold': 'Быстро, безопасно и удобно — ',
    'hero.subtitle.tail': 'всё, что нужно для комфортной поездки',
    'hero.cta.primary': 'Стать пассажиром',
    'hero.cta.secondary': 'Стать водителем',
    // Service section
    'service.about': 'О сервисе',
    'service.c1.l1': 'Быстрый поиск',
    'service.c1.l2': 'ближайшего водителя',
    'service.c2.l1': 'Удобная оплата',
    'service.c2.l2': 'картой или наличными',
    'service.c3.l1': 'Безопасность',
    'service.c3.l2': 'на каждом этапе',
    'service.c4.l1': 'Мгновенные',
    'service.c4.l2': 'уведомления и трекинг',

    // Passengers section
    'passengers.title': 'Для пассажиров',
    'passengers.c1.l1': 'Умное определение',
    'passengers.c1.l2': 'маршрута',
    'passengers.c2.l1': 'Прозрачная цена',
    'passengers.c2.l2': 'без скрытых комиссий',
    'passengers.c3.l1': 'Мгновенные уведомления',
    'passengers.c3.l2': 'о водителе',
    'passengers.cta': 'Начать поездку',

    // Drivers section
    'drivers.title': 'Для водителей',
    'drivers.subtitle': 'Зарабатывай с Taxi Bot, работай когда удобно.',
    'drivers.c1': 'Зарегистрируйся',
    'drivers.c2': 'Пройди проверку',
    'drivers.c3': 'Принимай заказы',
    'drivers.cta': 'Стать водителем',

    // Security section
    'security.title': 'Безопасность и надёжность',
    'security.c1.l1': 'Проверенные',
    'security.c1.l2': 'водители',
    'security.c2.l1': '24/7',
    'security.c2.l2': 'поддержка',
    'security.c3.l1': 'Геолокация',
    'security.c3.l2': 'в реальном времени',
    'security.c4.l1': 'Безопасные',
    'security.c4.l2': 'онлайн-платежи',

    // Footer
    'footer.telegram.title': 'Наш Telegram - Bot',
    'footer.telegram.handle': '@Hoptaxi',
    'footer.contacts.title': 'Контакты',
    'footer.docs.title': 'Документы',
    'footer.docs.offer': 'Публичная оферта',
    'footer.docs.privacy': 'Политика конфиденциальности',
    'footer.docs.aml': 'AML/KYC дисклеймер',
  },
  en: {
    'nav.about': 'About',
    'nav.passengers': 'For passengers',
    'nav.drivers': 'For drivers',
    'nav.support': 'Support',

    'hero.title.prefix': 'Taxi Bot —',
    'hero.title.suffix': ' your reliable partner in rides',
    'hero.subtitle.bold': 'Fast, safe and convenient — ',
    'hero.subtitle.tail': 'everything for a comfortable trip',
    'hero.cta.primary': 'Become a passenger',
    'hero.cta.secondary': 'Become a driver',
    // Service section
    'service.about': 'About',
    'service.c1.l1': 'Quick search',
    'service.c1.l2': 'for the nearest driver',
    'service.c2.l1': 'Convenient payment',
    'service.c2.l2': 'by card or cash',
    'service.c3.l1': 'Safety',
    'service.c3.l2': 'at every stage',
    'service.c4.l1': 'Instant',
    'service.c4.l2': 'notifications and tracking',

    // Passengers section
    'passengers.title': 'For passengers',
    'passengers.c1.l1': 'Smart route',
    'passengers.c1.l2': 'detection',
    'passengers.c2.l1': 'Transparent price',
    'passengers.c2.l2': 'without hidden fees',
    'passengers.c3.l1': 'Instant notifications',
    'passengers.c3.l2': 'about the driver',
    'passengers.cta': 'Start a trip',

    // Drivers section
    'drivers.title': 'For drivers',
    'drivers.subtitle': 'Earn with Taxi Bot — work when it suits you.',
    'drivers.c1': 'Register',
    'drivers.c2': 'Pass verification',
    'drivers.c3': 'Accept rides',
    'drivers.cta': 'Become a driver',

    // Security section
    'security.title': 'Security and reliability',
    'security.c1.l1': 'Verified',
    'security.c1.l2': 'drivers',
    'security.c2.l1': '24/7',
    'security.c2.l2': 'support',
    'security.c3.l1': 'Geolocation',
    'security.c3.l2': 'in real time',
    'security.c4.l1': 'Secure',
    'security.c4.l2': 'online payments',

    // Footer
    'footer.telegram.title': 'Our Telegram — Bot',
    'footer.telegram.handle': '@Hoptaxi',
    'footer.contacts.title': 'Contacts',
    'footer.docs.title': 'Documents',
    'footer.docs.offer': 'Public offer',
    'footer.docs.privacy': 'Privacy policy',
    'footer.docs.aml': 'AML/KYC disclaimer',
  }
}

function detectInitialLocale(): Locale {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && SUPPORTED.includes(stored)) return stored
  }
  if (typeof navigator !== 'undefined') {
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('ru')) return 'ru'
    if (nav.startsWith('uz')) return 'uz'
    if (nav.startsWith('en')) return 'en'
  }
  return DEFAULT_LOCALE
}

const _locale = ref<Locale>(detectInitialLocale())

export function useI18n(){
  const locale = _locale
  const setLocale = (val: Locale) => {
    if (!SUPPORTED.includes(val)) return
    locale.value = val
  }
  const t = (key: string) => {
    const dict = messages[locale.value] || {}
    return dict[key] ?? key
  }
  const available = SUPPORTED

  if (typeof window !== 'undefined') {
    watch(locale, (val) => {
      try { localStorage.setItem(STORAGE_KEY, val) } catch { /* ignore */ }
      document.documentElement.setAttribute('lang', val)
    }, { immediate: true })
  }

  return { locale, setLocale, t, available }
}

<template>
  <div class="documents-wrapper">
    <main class="documents-container">
      <div class="documents-actions">
        <button class="btn btn-back" @click="goBack">Назад</button>
        <button class="btn btn-download" @click="downloadPdf">Скачать PDF</button>
      </div>
      <section class="documents-content" ref="printArea">
        <h1 class="brand">H≜P Taxi</h1>
        <h2 class="title">ДОГОВОР-ОФЕРТА НА ОКАЗАНИЕ УСЛУГ ТАКСИ</h2>
        <p class="paragraph">
          Настоящий документ является официальным предложением (офертой) ООО «HopTaxi» в лице администрации сервиса,
          именуемого в дальнейшем «Исполнитель», заключить договор на оказание транспортных услуг (такси) с любым лицом,
          принявшим условия настоящей оферты (далее — «Заказчик»).
        </p>

        <h3>1. Предмет договора</h3>
        <ol class="list">
          <li>1.1. Исполнитель предоставляет Заказчику доступ к сервису HopTaxi для заказа транспортных услуг (такси) через мобильное приложение, Telegram-бот или иные каналы.</li>
          <li>1.2. Услуги включают организацию перевозки пассажиров и/или багажа с привлечением водителей-партнёров.</li>
        </ol>

        <h3>2. Порядок заключения договора</h3>
        <ol class="list">
          <li>2.1. Акцептом (принятием условий) настоящей оферты является оформление заказа через сервис HopTaxi.</li>
          <li>2.2. Договор считается заключённым с момента подтверждения заказа.</li>
        </ol>

        <h3>3. Оплата услуг</h3>
        <ol class="list">
          <li>3.1. Оплата услуг производится через платёжные системы (e-POS, банковские карты, иные доступные способы).</li>
          <li>3.2. Все расчёты осуществляются исключительно через корпоративный банковский счёт Исполнителя.</li>
        </ol>

        <h3>4. Права и обязанности сторон</h3>
        <ol class="list">
          <li>4.1. Заказчик обязан предоставить достоверную информацию при заказе поездки.</li>
          <li>4.2. Исполнитель обеспечивает организацию перевозки, но не несёт ответственность за действия водителей, являющихся независимыми партнёрами.</li>
        </ol>

        <h3>5. Ответственность сторон</h3>
        <ol class="list">
          <li>5.1. Исполнитель не несёт ответственности за задержки, вызванные пробками, погодными условиями и иными обстоятельствами непреодолимой силы.</li>
        </ol>

        <h3>6. Заключительные положения</h3>
        <ol class="list">
          <li>6.1. Настоящая оферта опубликована на сайте hoptaxi.uz и действует бессрочно.</li>
          <li>6.2. Заказчик подтверждает согласие с условиями оферты при каждом заказе.</li>
        </ol>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar/index.vue'
const goBack = () => {
  if (window.history.length > 1) window.history.back();
  else window.location.href = '/';
}
const downloadPdf = () => { window.print(); }
</script>

<style scoped>
.documents-wrapper { font-family: 'Inter', system-ui, sans-serif; }
.documents-container { max-width: 1100px; margin: 0 auto; padding: 80px 40px 80px; }
.documents-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px; }
.btn { cursor: pointer; border-radius: 26px; padding: 10px 34px; font-size: 15px; line-height: 1; border:1px solid #0A52CB; background:#fff; color:#0A52CB; transition:.2s; }
.btn:hover { background:#0A52CB; color:#fff; }
.btn-download { background:#0A52CB; color:#fff; }
.btn-download:hover { background:#06398e; }
.brand { text-align:center; font-size:28px; font-weight:600; letter-spacing:2px; color:#0A52CB; margin-bottom:34px; }
.title { text-align:center; font-size:20px; font-weight:600; margin-bottom:34px; }
.paragraph { font-size:16px; line-height:1.6; margin-bottom:28px; text-align:justify; }
.list { margin: 0 0 32px 0; padding-left: 22px; font-size:16px; line-height:1.6; }
.list li { margin-bottom:10px; }
.documents-content h3 { font-size:18px; margin:38px 0 18px; }
@media (min-width: 1400px) {
  .documents-container { max-width: 1200px; }
  .brand { font-size:32px; }
  .title { font-size:22px; }
  .paragraph, .list { font-size:18px; }
  .documents-content h3 { font-size:20px; }
}
@media (max-width: 640px) {
  .documents-container { padding: 100px 20px 60px; }
  .documents-actions { flex-direction: column; gap: 16px; }
  .btn { width: 100%; padding: 12px 24px; }
  .brand { font-size:24px; }
  .title { font-size:18px; }
}
@media print {
  .navbar, .documents-actions { display:none !important; }
  .documents-container { padding-top:20px; }
}
</style>

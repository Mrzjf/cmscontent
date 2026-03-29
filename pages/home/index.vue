<template>
  <section class="home-test">
    <h1>{{ t("welcome") }}</h1>
    <p>{{ t("description") }}</p>

    <div class="lang-switcher">
      <span
        >{{ t("language") }}:
        {{ currentLang === "zh" ? "中文" : "English" }}</span
      >
      <button @click="toggleLang">
        {{ t("switchLanguage") }}
      </button>
    </div>

    <div class="test-items">
      <div class="item">
        <span>{{ t("home") }}</span>
      </div>
      <div class="item">
        <span>{{ t("about") }}</span>
      </div>
      <div class="item">
        <span>{{ t("loading") }}</span>
      </div>
      <div class="item">
        <span class="success">{{ t("success") }}</span>
      </div>
      <div class="item">
        <span class="error">{{ t("error") }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, currentLang, toggleLang } = useI18n();
</script>

<style scoped>
.home-test {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 10px;
}

.lang-switcher {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.test-items {
  margin-top: 30px;
}

.item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>

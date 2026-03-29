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

<style scoped lang="stylus">
@import '../../assets/styles/variables.styl'
@import '../../assets/styles/mixins.styl'

.home-test
  padding $spacing-md
  center-container($max-width-sm)

h1
  color $text-color
  margin-bottom $spacing-xs

.lang-switcher
  margin $spacing-md 0
  flex-center()
  gap $spacing-sm

button
  button-base()
  background $primary-color
  color white

  &:hover
    background $primary-hover

.test-items
  margin-top $spacing-lg

.item
  padding $spacing-xs
  border-bottom 1px solid $border-color

.success
  color $success-color

.error
  color $error-color
</style>

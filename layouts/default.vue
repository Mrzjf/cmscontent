<template>
  <div class="layout-wrapper">
    <AppHeader />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'
@import '../assets/styles/mixins.styl'

.layout-wrapper
  display flex
  flex-direction column
  min-height 100vh

.main-content
  flex 1
  center-container($max-width-lg)
  padding $spacing-xl 1rem
</style>

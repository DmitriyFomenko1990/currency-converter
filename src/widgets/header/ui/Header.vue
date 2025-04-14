<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CurrencySwitcher from "@/features/currency-switcher/ui/CurrencySwitcher.vue";


</script>


<template>
  <header class="header">
    <nav class="header__nav">
      <RouterLink class="header__link" to="/">Главная</RouterLink>
      <RouterLink class="header__link" to="/convert">Конвертация</RouterLink>
    </nav>
    <div class="header__switcher">
      <CurrencySwitcher />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &__nav {
    display: flex;
    gap: 1rem;
  }

  &__link {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  &__switcher {
    min-width: 120px;
  }
}
</style>

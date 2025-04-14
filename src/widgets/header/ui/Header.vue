<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CurrencySwitcher from "@/features/currency-switcher/ui/CurrencySwitcher.vue";


</script>

<template>
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
    <nav style="display: flex; gap: 1rem;">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/convert">Конвертация</RouterLink>
    </nav>

    <CurrencySwitcher />
  </header>
</template>



<style scoped>

</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'
import { Currency } from '@/entities/currency/types'

const store = useCurrencyStore()
const { baseCurrency } = storeToRefs(store)

const supportedCurrencies = Object.values(Currency)
</script>

<template>
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
    <nav style="display: flex; gap: 1rem;">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/convert">Конвертация</RouterLink>
    </nav>
    <select v-model="baseCurrency">
      <option v-for="currency in supportedCurrencies" :key="currency" :value="currency">
        {{ currency }}
      </option>
    </select>
  </header>
</template>



<style scoped>

</style>

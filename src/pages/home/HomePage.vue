<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'
import { Currency } from '@/entities/currency/types'

const store = useCurrencyStore()

onMounted(() => {
  if (!Object.keys(store.rates).length) {
    store.fetchRates()
  }
})

const currenciesToShow = computed(() =>
    Object.values(Currency).filter((c) => c !== store.baseCurrency)
)

const getFormattedRate = (targetCurrency: Currency): string => {
  const rate = store.getRate(targetCurrency, store.baseCurrency)
  return rate.toFixed(2)
}
</script>

<template>
  <div style="padding: 2rem;">
    <h1>Курсы валют относительно {{ store.baseCurrency }}</h1>
    <ul>
      <li v-for="currency in currenciesToShow" :key="currency">
        1 {{ currency }} = {{ getFormattedRate(currency) }} {{ store.baseCurrency }}
      </li>
    </ul>
  </div>
</template>

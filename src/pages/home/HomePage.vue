<script setup lang="ts">
import { computed } from 'vue'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'
import { Currency } from '@/entities/currency/types'

const store = useCurrencyStore()

const currenciesToShow = computed(() =>
    Object.values(Currency).filter((c) => c !== store.baseCurrency)
)

const getFormattedRate = (targetCurrency: Currency): string => {
  const rate = store.getRate(targetCurrency, store.baseCurrency)
  return rate.toFixed(2)
}
</script>

<template>
  <div class="home">
    <h1 class="home__title">Курсы валют относительно {{ store.baseCurrency }}</h1>
    <ul class="home__list">
      <li class="home__item" v-for="currency in currenciesToShow" :key="currency">
        1 {{ currency }} = {{ getFormattedRate(currency) }} {{ store.baseCurrency }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding: 2rem;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    font-size: 1.1rem;
  }

  &__item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    width: fit-content;
  }
}
</style>

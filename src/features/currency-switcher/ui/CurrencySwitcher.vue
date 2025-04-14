<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'
import CurrencySelect from '@/shared/ui/CurrencySelect.vue'

const store = useCurrencyStore()
const { baseCurrency } = storeToRefs(store)
</script>

<template>
  <CurrencySelect v-model="baseCurrency" />
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { Currency } from '@/entities/currency/types'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'

const store = useCurrencyStore()

const form = reactive([
  { currency: Currency.RUB, amount: 0 },
  { currency: Currency.USD, amount: 0 }
])

const updateAmount = (sourceIndex: 0 | 1) => {
  const targetIndex = sourceIndex === 0 ? 1 : 0
  const rate = store.getRate(form[sourceIndex].currency, form[targetIndex].currency)
  form[targetIndex].amount = parseFloat((form[sourceIndex].amount * rate).toFixed(2))
}

watch(() => form[0].currency, () => updateAmount(1))
watch(() => form[1].currency, () => updateAmount(0))
</script>

<template>
  <div style="padding: 2rem;">
    <h1>Конвертация валют</h1>

    <div v-for="(row, index) in form" :key="index" style="margin-bottom: 1rem;">
      <select v-model="row.currency" style="margin-right: 1rem;">
        <option v-for="currency in Object.values(Currency)" :key="currency" :value="currency">
          {{ currency }}
        </option>
      </select>
      <input
          type="number"
          v-model.number="row.amount"
          @input="updateAmount(index as 0 | 1)"
          placeholder="0.00"
          style="width: 200px;"
      />
    </div>
  </div>
</template>

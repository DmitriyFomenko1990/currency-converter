<script setup lang="ts">
import { Currency } from '@/entities/currency/types'
import { NSelect } from 'naive-ui'

defineProps<{
  modelValue: Currency
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Currency): void
}>()

const options = Object.values(Currency).map((c) => ({
  label: c,
  value: c
}))
</script>

<template>
  <n-select
      class="currency-select"
      :value="modelValue"
      :options="options"
      @update:value="emit('update:modelValue', $event)"
  />
</template>

<style scoped lang="scss">
.currency-select {
  width: 120px;
}
</style>

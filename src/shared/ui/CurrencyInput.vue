<script setup lang="ts">
import { NInputNumber } from 'naive-ui'

defineProps<{
  modelValue: number | null
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'input'): void
}>()
</script>

<template>
  <n-input-number
      class="currency-input"
      :value="modelValue"
      @update:value="(val) => emit('update:modelValue', val ?? 0)"
      @input="emit('input')"
      :min="0"
      :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.currency-input {
  width: 200px;
}
</style>

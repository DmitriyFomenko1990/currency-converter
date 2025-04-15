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

const handleKeyDown = (event: KeyboardEvent) => {
  const allowedKeys = [
    'Backspace',
    'Tab',
    'Enter',
    'Escape',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
  ]

  const isNumber = /^[0-9]$/.test(event.key)
  const isDot = event.key === '.'

  if (!isNumber && !isDot && !allowedKeys.includes(event.key)) {
    event.preventDefault()
  }
}
</script>

<template>
  <n-input-number
      class="currency-input"
      :value="modelValue"
      @update:value="(val) => emit('update:modelValue', val ?? 0)"
      @input="emit('input')"
      :min="0"
      :placeholder="placeholder"
      @keydown="handleKeyDown"
  />
</template>

<style scoped lang="scss">
.currency-input {
  width: 200px;
}
</style>

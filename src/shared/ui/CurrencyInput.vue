<script setup lang="ts">
import { NInputNumber } from 'naive-ui'

defineProps<{
  modelValue: number
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'input'): void
}>()
</script>

<template>
  <n-input-number
      :value="modelValue"
      @update:value="(val) => emit('update:modelValue', val)"
      @input="emit('input')"
      :min="0"
      :placeholder="placeholder"
      style="width: 200px"
  />
</template>

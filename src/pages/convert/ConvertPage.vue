<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useCurrencyStore } from '@/entities/currency/model/currencyStore'
import { Currency } from '@/entities/currency/types'
import { useMessage } from 'naive-ui'
import { object, number } from 'yup'
import CurrencySelect from '@/shared/ui/CurrencySelect.vue'
import CurrencyInput from '@/shared/ui/CurrencyInput.vue'

const store = useCurrencyStore()
const message = useMessage()

const form = reactive([
  { currency: Currency.RUB, amount: 0 },
  { currency: Currency.USD, amount: 0 }
])

const schema = object({
  amount: number()
      .typeError('Введите число')
      .required('Введите значение')
      .min(0, 'Значение не может быть отрицательным')
})

const validate = async (index: number) => {
  try {
    await schema.validate({ amount: form[index].amount })
    return true
  } catch (err: any) {
    message.error(err.message)
    return false
  }
}

const updateAmount = async (sourceIndex: 0 | 1) => {
  const targetIndex = sourceIndex === 0 ? 1 : 0
  const valid = await validate(sourceIndex)
  if (!valid) return
  const rate = store.getRate(form[sourceIndex].currency, form[targetIndex].currency)
  form[targetIndex].amount = parseFloat((form[sourceIndex].amount * rate).toFixed(2))
}

watch(() => form[0].currency, () => updateAmount(0))
watch(() => form[1].currency, () => updateAmount(0))
</script>

<template>
  <div class="convert">
    <h1 class="convert__title">Конвертация валют</h1>

    <div
        class="convert__row"
        v-for="(row, index) in form"
        :key="index"
    >
      <CurrencySelect v-model="row.currency" />
      <CurrencyInput v-model="row.amount" @input="() => updateAmount(index as 0 | 1)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.convert {
  padding: 2rem;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &__row {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
}
</style>

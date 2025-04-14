import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Currency, type CurrencyRatesResponse } from '../types'
import { getRates } from '../api/getRates'

export const useCurrencyStore = defineStore('currency', () => {
    const baseCurrency = ref<Currency>(Currency.RUB)
    const rates = ref<CurrencyRatesResponse>({})

    const fetchRates = async () => {
        rates.value = await getRates()
    }

    const getRate = (from: Currency, to: Currency): number => {
        if (from === to) return 1
        const pair = `${from.toLowerCase()}-${to.toLowerCase()}`
        return rates.value[pair] ?? 0
    }

    return {
        baseCurrency,
        rates,
        fetchRates,
        getRate
    }
})

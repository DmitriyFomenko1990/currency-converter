import axios from 'axios'
import type { CurrencyRatesResponse } from '../types/index'

const API_URL = 'https://status.neuralgeneration.com/api/currency'

export const getRates = async (): Promise<CurrencyRatesResponse> => {
    const response = await axios.get<CurrencyRatesResponse>(API_URL)
    return response.data
}

export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',

}

export type CurrencyPair = string

export interface CurrencyRatesResponse {
    [pair: string]: number
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ExchangeRateResponse {
  data: {
    [currencyCode: string]: number;
  };
}

export interface CurrencyResponse {
  data: {
    [currencyCode: string]: Currency;
  };
}
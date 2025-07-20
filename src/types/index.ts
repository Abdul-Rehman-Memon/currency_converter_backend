export interface ConversionRequest {
  base_currency: string;
  currencies: string;
  amount: number;
  apikey?: string;
}

export interface ConversionRecord extends ConversionRequest {
  rate: number;
  result: number;
  timestamp: number;
}

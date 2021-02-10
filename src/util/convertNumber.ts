import { numberInFullConverter } from 'number-in-full-multilang';
import writtenNumber from 'written-number'


export function convert(value: string, isDollar) {
  if (!value || Number.isNaN(Number(value))) return 'Number invalid'
  return isDollar ? numberInFullConverter(value, 'en') : writtenNumber(value)
}


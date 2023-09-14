import { Pipe, PipeTransform } from '@angular/core';

/**
 * 1000 EUR --> 1000,00 €
 * 1000,567 USD -> $ 1000.57
 */

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number | undefined | null, isoCode = 'eur'): string {
    isoCode = isoCode.toLowerCase();
    if (!value) {
      return '- ' + symbol(isoCode);
    }
    const valor = value.toFixed(2).replace('.', ',');
    if (isoCode === 'usd') {
      return `${symbol(isoCode)} ${valor}`;
    }
    return `${valor} ${symbol(isoCode)}`;
  }
}

const symbol = (isoCode: string): string => {
  switch (isoCode) {
    case 'eur': return '€'
    case 'usd': return '$'
    default: return isoCode;
  }
};

import { CurrencyPipe } from './currency.pipe';

/**
 * 1000 EUR --> 1000,00 €
 * 1000,567 USD -> $ 1000.57
 * null            ->  - €
 */

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it('should render 1000,00 € when passing 1000 EUR', () => {
    const pipe = new CurrencyPipe();
    const res = pipe.transform(1000.00, 'eur');
    expect(res).toBe('1000,00 €');
  });
  it('should render $ 1000.57 when 1000,567 USD', () => {
    const pipe = new CurrencyPipe();
    const res = pipe.transform(1000.567, 'usd');
    expect(res).toBe('$ 1000,57');

  });
  it('should render - when null or undefined', () => {
    const pipe = new CurrencyPipe();
    const res = pipe.transform(null, 'eur');
    expect(res).toBe('- €');
  });
  it('should render $ 1000.57 when 1000,567 USD (upercase currency)', () => {
    const pipe = new CurrencyPipe();
    const res = pipe.transform(1000.567, 'USD');
    expect(res).toBe('$ 1000,57');
  });

});

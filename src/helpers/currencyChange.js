export const currencyChange = (number, currency) => {
  if(currency === "EUR") {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number * 0.87);
  }

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
};

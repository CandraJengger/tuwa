export const currencyFormatToRupiah = (amount: number) =>
  amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });

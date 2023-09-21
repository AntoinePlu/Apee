const numberFormat = new Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
  return numberFormat.format(number);
}

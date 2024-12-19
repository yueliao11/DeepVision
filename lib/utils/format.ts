export function formatCurrency(value: number | string): string {
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numValue);
}

export function formatAddress(address: string): string {
  if (address.includes('...')) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatPercentage(value: string): string {
  const numValue = parseFloat(value);
  return `${numValue >= 0 ? '+' : ''}${numValue.toFixed(2)}%`;
}
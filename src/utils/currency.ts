export const SGD_RATE = 11300;
export const MYR_RATE = 3550;

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompactIDR(amount: number): string {
  if (amount >= 1000000) {
    const val = (amount / 1000000).toFixed(1).replace('.0', '');
    return `Rp ${val} Jt`;
  }
  return `Rp ${(amount / 1000).toLocaleString('id-ID')}rb`;
}

export function estimateSGD(amountIDR: number): string {
  const sgd = Math.round(amountIDR / SGD_RATE);
  return `~SGD ${sgd}`;
}

export function estimateMYR(amountIDR: number): string {
  const myr = Math.round(amountIDR / MYR_RATE);
  return `~MYR ${myr}`;
}

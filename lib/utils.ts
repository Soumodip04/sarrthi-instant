export type Currency = "USD" | "GBP" | "AUD" | "EUR";

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string; prefix: string }> = {
  USD: { symbol: "$", rate: 1.0, label: "USD ($)", prefix: "$" },
  GBP: { symbol: "£", rate: 0.79, label: "GBP (£)", prefix: "£" },
  AUD: { symbol: "A$", rate: 1.54, label: "AUD (A$)", prefix: "A$" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR (€)", prefix: "€" },
};

export function formatCurrency(amountUSD: number, currency: Currency): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = Math.round(amountUSD * rate);
  return `${symbol}${converted.toLocaleString()}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

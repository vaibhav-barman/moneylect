export function calculateSIP(
  monthlyInvestment: number,
  years: number,
  annualRate: number
) {
  const months = years * 12;

  const monthlyRate = annualRate / 12 / 100;

  const maturity =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) *
      (1 + monthlyRate)) /
      monthlyRate);

  const invested = monthlyInvestment * months;

  const returns = maturity - invested;

  return {
    invested: Math.round(invested),
    returns: Math.round(returns),
    total: Math.round(maturity),
  };
}
export function calculatePPF(
  yearlyInvestment: number,
  years: number,
  annualRate: number
) {
  let balance = 0;

  for (let i = 0; i < years; i++) {
    balance += yearlyInvestment;
    balance *= 1 + annualRate / 100;
  }

  const invested = yearlyInvestment * years;

  const returns = balance - invested;

  return {
    invested: Math.round(invested),
    returns: Math.round(returns),
    maturity: Math.round(balance),
  };
}
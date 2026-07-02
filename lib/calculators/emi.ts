export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
) {

  const monthlyRate = annualRate / 12 / 100;

  const months = years * 12;

  const emi =
    principal *
    monthlyRate *
    Math.pow(1 + monthlyRate, months) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const total = emi * months;

  const interest = total - principal;

  return {

    emi: Math.round(emi),

    total: Math.round(total),

    interest: Math.round(interest),

  };

}
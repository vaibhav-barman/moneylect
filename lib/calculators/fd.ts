export function calculateFD(
  principal: number,
  annualRate: number,
  years: number
) {
  const maturity =
    principal *
    Math.pow(
      1 + annualRate / 100,
      years
    );

  const interest =
    maturity - principal;

  return {
    principal: Math.round(principal),
    interest: Math.round(interest),
    maturity: Math.round(maturity),
  };
}
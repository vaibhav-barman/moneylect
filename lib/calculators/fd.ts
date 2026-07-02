export function calculateFD(
  principal: number,
  rate: number,
  years: number
) {
  const maturity =
    principal *
    Math.pow(
      1 + rate / 100,
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
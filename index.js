const monthlyBillingByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calculatesPercentage(data) {
  const total = Object.values(data).reduce((acc, current) => acc + current, 0);

  for (const state in data) {
    console.log(`${state}: ${(data[state] / total * 100).toFixed(2)}%`);
  }
}

calculatesPercentage(monthlyBillingByState);
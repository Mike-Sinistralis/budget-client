export function getDollarColor(amount){
  if (amount < 0) { return {color: 'red'}; }
  if (amount > 0) { return {color: 'green'}; }
  return {color: ''};
}

export function getAmountFormat(amount){
  return amount.toFixed(2).replace("-","");
}

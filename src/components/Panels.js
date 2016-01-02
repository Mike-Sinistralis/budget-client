/* Panels Components
  ---------------
  Exports all components in ../panels/*.jsx
*/

import { BudgetChart } from './panels/BudgetChart';
import { DailySpend, DailySpendContainer } from './panels/DailySpend';
import { DailyTransactions } from './panels/DailyTransactions';
import { RoutineTransactions } from './panels/RoutineTransactions';

module.exports = {
  BudgetChart: BudgetChart,
  DailySpend: DailySpend,
  DailySpendContainer: DailySpendContainer,
  DailyTransactions: DailyTransactions,
  RoutineTransactions: RoutineTransactions
};

import { useContext } from "react";
import { TransactionsContext } from "../contexts/transactions";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (sum, transaction) => {
      if (transaction.type === "income") {
        sum.income += transaction.price;
        sum.total += transaction.price;
      }

      if (transaction.type === "outcome") {
        sum.outcome += transaction.price;
        sum.total -= transaction.price;
      }

      return sum;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
}

import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/transactions";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions]);

  return summary;
}

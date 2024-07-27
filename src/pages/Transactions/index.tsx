import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/transactions";
import { dateFormatter, priceFormatter } from "../../utils/formatters";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(
              ({ id, description, type, category, price, createdAt }) => (
                <tr key={id}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>
                      {type === "outcome" && "- "}
                      {priceFormatter.format(price)}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              )
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

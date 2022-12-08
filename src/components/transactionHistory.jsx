import { useContext } from "react";
import {CurrentUserContext } from "../App";

export default function TransactionHistory() {
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);

  return (
    <>
      <h1>Transaction History</h1> <br />
      <hr />
      <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Account Balance</th>
            </tr>
        </thead>
        <tbody>
        {currentCtx.transactionHistory.map((transaction, index) => {
          return (
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

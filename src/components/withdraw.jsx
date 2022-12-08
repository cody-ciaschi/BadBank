import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
 import Card from "./card";

export default function Withdraw() {
  const [ctx, setCtx] = useContext(UserContext);
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    if (currentCtx.balance >= amount) {
      let newBalance = currentCtx.balance - amount;
      setCurrentCtx({...currentCtx,
        balance:newBalance,
        transactionHistory:[...currentCtx.transactionHistory, {type:"Withdraw", amount:amount, balance:newBalance}]
      });
      const newCtx = ctx.users.map((user) => {
        if (user.email === currentCtx.email) {
          return ({...user, 
            balance:newBalance,
            transactionHistory:[...user.transactionHistory, {type:"Withdraw", amount:amount, balance:newBalance}]
          });
        } else {
          return user;
        }
      });
      setCtx({users:newCtx});
    } else {
      window.alert("Error: Cannot Withdraw, account balance too low");
    }
  }

  return (
    <>
      <h1>Welcome, {currentCtx.name}!</h1>
      <Card
        bgcolor="secondary"
        header="Withdraw"
        body={
          <form onSubmit={handleSubmit}>
            <h3>Current Balance {currentCtx.balance}</h3>
            <input
              type="number"
              className="form-control"
              placeholder="Enter withdraw amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            ></input>{" "}
            <br />
            <button type="submit" className="btn btn-light">
              Withdraw
            </button>
          </form>
        }
      />
    </>
  );
}

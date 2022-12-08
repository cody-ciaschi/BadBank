import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
import Card from "./card";

export default function Deposit() {
  const [ctx, setCtx] = useContext(UserContext);
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    let newBalance = currentCtx.balance + Number(amount);
    setCurrentCtx({...currentCtx, 
      balance:newBalance,
      transactionHistory:[...currentCtx.transactionHistory, {type:"Deposit", amount:amount, balance:newBalance}]
    });
    const newCtx = ctx.users.map((user) => {
      if (user.email === currentCtx.email) {
        return ({...user,
          balance:newBalance,
          transactionHistory:[...user.transactionHistory, {type:"Deposit", amount:amount, balance:newBalance}]
        });
      } else {
        return user;
      }
    });
    setCtx({users:newCtx});
  }

  return (
    <>
      <h1>Welcome, {currentCtx.name}!</h1>
      <Card
        bgcolor="success"
        header="Deposit"
        body={
          <form onSubmit={handleSubmit}>
            <h3>Current Balance {currentCtx.balance}</h3>
            <input
              type="number"
              className="form-control"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>{" "}
            <br />
            <button type="submit" className="btn btn-light">
              Deposit
            </button>
          </form>
        }
      />
    </>
  );
}

import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
import Card from "./card";
import { Container, Form, Button } from "react-bootstrap";

export default function Withdraw() {
  const [ctx, setCtx] = useContext(UserContext);
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    if (Number(amount) <= 0) {
      window.alert("Please enter a number above 0.");
      return;
    }

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
    <Container>
      <h1>Welcome, {currentCtx.name}!</h1>
      <Card
        bgcolor="secondary"
        header="Withdraw"
        body={
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formAmount">
              <Form.Label className="h3">Current Balance {currentCtx.balance}</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter withdraw amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            
            <Button variant="light" type="submit">
              Withdraw
            </Button>
          </Form>
        }
      />
    </Container>
  );
}

import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
import Card from "./card";
import { Container, Form, Button } from 'react-bootstrap'

export default function Deposit() {
  const [ctx, setCtx] = useContext(UserContext);
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);
  const [amount, setAmount] = useState(0);

  function handleSubmit() {

    // Check if amount entered is above 0
    if (Number(amount) <= 0) {
      window.alert("Please enter a number above 0.");
      return;
    }

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
    <Container>
      <h1>Welcome, {currentCtx.name}!</h1>
      <Card
        bgcolor="success"
        header="Deposit"
        body={
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formAmount">
              <Form.Label className="h3">Current Balance {currentCtx.balance}</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter deposit amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            
            <Button variant="light" type="submit">
              Deposit
            </Button>
          </Form>
        }
      />
    </Container>
  );
}

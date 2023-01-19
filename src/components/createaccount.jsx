import { useContext, useState } from "react";
import { UserContext } from "../App";
import Card from "./card";
import { Form, Button } from "react-bootstrap";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [showAcctBtn, setShowAcctBtn] = useState(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ctx, setCtx] = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    switch(label) {
      case "email" : {

      }
    }

    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    let newUsersArray = [
      ...ctx.users,
      { name, email, password, balance: 100, transactionHistory: [] },
    ];
    setCtx({ ...ctx, users: newUsersArray });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <Form onSubmit={handleCreate}>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="input"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                ></Form.Control>
            </Form.Group>

            <Button variant="light" type="submit">
              Submit
            </Button>

          </Form>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

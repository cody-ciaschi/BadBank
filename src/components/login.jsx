import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
import Card from "./card";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [success, setSuccess] = useState(false);
  const [ctx, setCtx] = useContext(UserContext);
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);

  function checkUser() {
    for (const user of ctx.users) {
      if (user.email === email && user.password === password) {
        setCurrentCtx(user);
        setSuccess(true);
        return;
      }
    }
    if (!success) window.alert("Login unsuccessful, check email and password");
  }

  return (
    <>
      {success ? (
        <h1>Login Successful</h1>
      ) : (
        <Card
          bgcolor="primary"
          header="Login"
          body={
            <Form onSubmit={checkUser}>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="light" type="submit">
                Submit
              </Button>

            </Form>
          }
        />
      )}
    </>
  );
}

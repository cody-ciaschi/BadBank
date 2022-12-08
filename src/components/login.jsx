import { useContext, useState } from "react";
import { UserContext, CurrentUserContext } from "../App";
import Card from "./card";

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
            <form onSubmit={checkUser}>
              Email Address <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>{" "}
              <br />
              Password <br />
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>{" "}
              <br />
              <button type="submit" className="btn btn-light">
                Login
              </button>
            </form>
          }
        />
      )}
    </>
  );
}

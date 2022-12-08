import { useContext } from "react";
import { CurrentUserContext } from "../App";
import Card from "./card";

export default function Balance() {
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);
  return (
    <>
      <h1>Welcome, {currentCtx.name}!</h1>
      <Card
        bgcolor="info"
        header="Current Balance"
        body={<h1>{currentCtx.balance}</h1>}
      />
    </>
  );
}

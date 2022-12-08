import { useContext } from "react";
import { UserContext } from "../App";

export default function AllData() {
  const ctx = useContext(UserContext);
  
  return (
    <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}
      <br />
    </>
  );
}

import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useContext, createContext } from 'react';
import Home from "./components/home";
import NavBar from "./components/navbar";
import Balance from './components/balance';
import Login from './components/login';
import Deposit from './components/deposit';
import AllData from './components/alldata';
import Withdraw from './components/withdraw';
import CreateAccount from './components/createaccount';
import TransactionHistory from "./components/transactionHistory";

export const UserContext = createContext(null);
export const CurrentUserContext = createContext(null);

function App() {
  const [count, setCount] = useState(0)
  const [context, setContext] = useState({users: [{name: "Cody",email: "cody@test.com",password: "test", balance: 100, transactionHistory: []}]});
  const [currentContext, setCurrentContext] = useState({});

  return (
    <HashRouter>
      <NavBar />
        <UserContext.Provider value={[context, setContext]}>
        <CurrentUserContext.Provider value={[currentContext, setCurrentContext]}>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<AllData />} />
            <Route path="/history" element={<TransactionHistory />} />
          </Routes>
        </div>
        </CurrentUserContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App

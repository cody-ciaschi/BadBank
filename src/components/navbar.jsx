import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CurrentUserContext } from "../App";

export default function NavBar() {
  const [currentCtx, setCurrentCtx] = useContext(CurrentUserContext);

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Bank of Cody
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>

            {currentCtx &&
            <>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/history">
                History
              </a>
            </li>
            </>
            }
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  ); 
}

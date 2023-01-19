import { useContext } from "react";
import { UserContext } from "../App";
import Card from "./card";
import { Container, Row, Col } from "react-bootstrap"


export default function AllData() {
  const [ctx, setCtx] = useContext(UserContext);
  
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={3} xxl={3} className="g-4">
        {ctx.users.map(user => {
          return (
            <Col>
              <Card 
                bgcolor="primary"
                header={<h2 className="text-left">{user.name}</h2>}
                body={
                  <Container fluid>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Current Balance: {user.balance}</p>
                  </Container>
                }
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget} from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="primary">
      <Container>
        <Navbar.Brand href="#home">Fashion Verse</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Quienes Somos</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};

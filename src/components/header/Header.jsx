import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.png";
import { BsPerson } from "react-icons/bs";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="https://happyhandsart.com.au/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="headerBody">
            <Nav
              className="normalHeader my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="https://happyhandsart.com.au/my-account/"
                className="account"
              >
                <BsPerson size={20} />
                <div className="accountText">My Account</div>
              </Nav.Link>
            </Nav>
            <Nav.Link href="https://happyhandsart.com.au/our-story/">
              Our Story
            </Nav.Link>
            <Nav.Link href="https://happyhandsart.com.au/store/">
              Store
            </Nav.Link>
            <Nav.Link href="https://happyhandsart.com.au/happy-and-family/">
              Happy Hands Family
            </Nav.Link>
            <Nav.Link href="https://happyhandsart.com.au/kids-art-time-live/">
              Art Time Live
            </Nav.Link>
            <Nav.Link href="https://happyhandsart.com.au/art-time-locations/">
              Art Time Locations{" "}
            </Nav.Link>
            <Nav.Link href="https://happyhandsart.com.au/my-account/membership-plans/">
              Subscribe{" "}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

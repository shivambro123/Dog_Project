import { useContext,useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { DataContext } from './ContextComp';
import { useSelector } from 'react-redux';
import './NavbarCompcss.css'
import CartComp from './CartComp';

function NavbarComponent() {
  const {state,dispatch} = useContext(DataContext)
  const data = useSelector((state) => state.dog);
  console.log("nav", data);
  console.log(state.statevalue)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    setShow(state.statevalue)
  },[state])
  return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 px-5">
          <Container fluid>
            <Navbar.Brand href="#"><h4>ADOPT PET</h4></Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
              className="closebutton"     
            >
              <Offcanvas.Header show={show} closeButton className='offcanvas-wrapper'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Cart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              {data.cart.map((val,ind) => {
                  return (
                     <CartComp image={val.message} val={val} price={val.price} />
                  );
                })}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
  );
}

export default NavbarComponent;
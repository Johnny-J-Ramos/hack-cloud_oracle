import '../css/menu.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Menu() {
  return (
    <div className="menu">
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="home" id="brand-name" className="details-menu-color">Hack@Cloud</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="crestaurante" className="detail-menu">Cadastro Restaurante</Nav.Link>
              <Nav.Link href="cpratos" className="detail-menu">Cadastro Pratos</Nav.Link>
              <Nav.Link href="cusuario" className="detail-menu">Cadastro Usuário</Nav.Link>
              <Nav.Link href="fpedido" className="detail-menu">Fazer Pedido</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="login" className="detail-menu">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

import { Navbar, Container } from "react-bootstrap"

export default function NavbarApp() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/addCrew">Ajout d'équipage</Navbar.Brand>
        <Navbar.Brand href="/addCharacter">Ajout de pirates</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

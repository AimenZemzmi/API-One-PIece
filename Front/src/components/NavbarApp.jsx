import { Navbar, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search"


export default function NavbarApp() {
  return (
    <Navbar style={{backgroundColor:'#ffc500', boxShadow:" 0 3px 12px 0 rgb(0 0 0 / 30%)"}}>
      <Container>
        <Navbar.Brand href="/"><img src={ require('./images/one_piece.png').default} height={"50px"}/></Navbar.Brand>
        
        <Search />
        <div style={{float:"right"}}>
          <Navbar.Brand className="add-crew" href="/addCrew">
            <FontAwesomeIcon icon={faAnchor} /> Ajouter un équipage
          </Navbar.Brand>
          <Navbar.Brand className="add-pirate" href="/addCharacter">
          <FontAwesomeIcon icon={faSkullCrossbones} /> Ajouter un pirate
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  )
}

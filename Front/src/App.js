import "./App.css"
import { useState, useEffect } from "react"
import NavbarApp from "./components/NavbarApp"
import axios from "axios"

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap"

export default function App() {
  const [nbPic, setNbPic] = useState(1)
  const [produit, setProduit] = useState({})
  const [formAjout, setFormAjout] = useState({})
  const [crews, setCrews] = useState([])
  const [listCrews, setListCrews] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrews(datas.data)
      console.log(datas.data)
    })
  }, [])

  function getDatas() {
    let url = `http://localhost:3010/user/${nbPic}`

    fetch(url)
      .then(function (res) {
        return res.json()
      })
      .then(function (datas) {
        alert()
        // setProduit(datas)
      })
  }

  function addCrew(event) {
    event.preventDefault()
    const { name, ship, picture } = { ...formAjout }
    //alert(category)
    let url = `http://localhost:3010/crew`

    axios.post(url, {
      name,
      ship,
      picture,
    })
  }

  function updateCrew(id) {
    let url = `http://localhost:3010/crew/${id}`

    axios.put(url, { _id: id, name: "updateName" })
  }

  return (
    <div className="App">
      <NavbarApp />

      <Container>
        <Row mt={5}>
          <Col md="6">
            <h1>Formulaire ajout équipage</h1>
            <hr />
            <Form onSubmit={(e) => addCrew(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  value={formAjout.name}
                  type="text"
                  placeholder="Nom de l'équipage"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.name = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bateau</Form.Label>
                <Form.Control
                  value={formAjout.ship}
                  type="text"
                  placeholder="bateau de l'équipage"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.ship = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photo Bateau</Form.Label>
                <Form.Control
                  value={formAjout.picture}
                  type="text"
                  placeholder="photo boat"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.picture = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Button variant="info" type="submit">
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <ul>
            {crews.map((crew) => (
              <>
                <li>{crew.name}</li>
                <Button variant="info" onClick={() => updateCrew(crew._id)}>
                  Enregistrer
                </Button>
              </>
            ))}
          </ul>
        </Row>
      </Container>
    </div>
  )
}

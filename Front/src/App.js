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
  const [categs, setCategs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3010/category").then((datas) => {
      setCategs(datas.data)
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

  function addUser(event) {
    event.preventDefault()
    const { nom, prenom, age } = { ...formAjout }
    //alert(category)
    let url = `http://localhost:3010/user`

    axios.post(url, {
      nom,
      prenom,
      age
    })
  }

  return (
    <div className="App">
      <NavbarApp />


      <Container>
        <Row mt={5}>
          <Col md="6">
            <h1>Formulaire ajout utilisateur</h1>
            <hr />
            <Form onSubmit={(e) => addUser(e)}>


              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  value={formAjout.nom}
                  type="nom"
                  placeholder="Larrat"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.nom = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                  value={formAjout.prenom}
                  type="prenom"
                  placeholder="Philippe"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.prenom = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  value={formAjout.age}
                  type="number"
                  placeholder="ex : 20"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.age = e.target.value
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
      </Container>
    </div>
  )
}

import "../App.css"
import { useState } from "react"
import axios from "axios"

import { Container, Row, Col, Button, Form } from "react-bootstrap"

export default function AddCrew() {
  const [formAjout, setFormAjout] = useState({})

  function addCrew(event) {
    event.preventDefault()
    const { name, ship, picture } = { ...formAjout }
    let url = `http://localhost:3010/crew`

    axios.post(url, {
      name,
      ship,
      picture,
    })
  }

  return (
    <div className="addCrew">
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
      </Container>
    </div>
  )
}

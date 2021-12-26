import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { Container, Button, Form } from "react-bootstrap"

export default function Crew() {
  const [id] = useState(window.location.pathname.split("/")[2])
  const [crew, setCrew] = useState({})
  const [formUpdate, setFormUpdate] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3010/crew/${id}`).then((datas) => {
      setCrew(datas.data)
    })
  }, [id])

  function updateCrew(event) {
    event.preventDefault()
    const { name, ship, picture } = { ...formUpdate }
    let url = `http://localhost:3010/crew/${id}`

    axios.post(url, {
      name,
      ship,
      picture,
    })
  }

  async function deleteCrew() {
    let url = `http://localhost:3010/crew/${id}`
    await axios.delete(url)
  }

  return (
    <div className="crew">
      <Container>
        <Form onSubmit={(e) => updateCrew(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              defaultValue={crew.name}
              type="text"
              placeholder="Nom de l'équipage"
              required
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.name = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bateau</Form.Label>
            <Form.Control
              defaultValue={crew.ship}
              type="text"
              placeholder="bateau de l'équipage"
              required
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.ship = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo Bateau</Form.Label>
            <Form.Control
              defaultValue={crew.picture}
              type="text"
              placeholder="photo boat"
              required
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.picture = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Enregistrer
          </Button>
        </Form>
        <Button variant="danger" onClick={deleteCrew} type="submit">
          Supprimer
        </Button>
      </Container>
    </div>
  )
}

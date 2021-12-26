import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { Container, Button, Form } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Crew() {
  const [id] = useState(window.location.pathname.split("/")[2])
  const [crew, setCrew] = useState({})
  const [formUpdate, setFormUpdate] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3010/crew/${id}`).then((datas) => {
      setCrew(datas.data)
      setFormUpdate({
        name: datas.data.name,
        ship: datas.data.ship,
        picture: datas.data.picture,
      })
    })
  }, [id])

  function updateCrew(event) {
    event.preventDefault()
    const { name, ship, picture } = { ...formUpdate }
    let url = `http://localhost:3010/updateCrew/${id}`
    console.log(name, ship, picture)
    axios.put(url, {
      id,
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
      <Container className="form">
      <h1 style={{textAlign: "center"}}>Informations</h1>
        <Form onSubmit={(e) => updateCrew(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              defaultValue={crew.name}
              type="text"
              placeholder="Nom de l'équipage"
              required
              onChange={(e) => {
                const tmp = { ...formUpdate }
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
                const tmp = { ...formUpdate }
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
                const tmp = { ...formUpdate }
                tmp.picture = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <button className="btn-form" type="submit">
            <FontAwesomeIcon icon={faEdit} /> Modifier
          </button>
        </Form>
        <Button variant="danger" onClick={deleteCrew} type="submit">
          Supprimer
        </Button>
      </Container>
    </div>
  )
}

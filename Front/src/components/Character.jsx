import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { Container, Button, Form } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Character() {
  const [id] = useState(window.location.pathname.split("/")[2])
  const [character, setCharacter] = useState({})
  const [formUpdate, setFormUpdate] = useState({
    name: "",
    bonus: 0,
    picture: "",
    is_pirate: false,
    crew: "",
  })
  const [crews, setCrew] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3010/character/${id}`).then((datas) => {
      setCharacter(datas.data)
      console.log(datas.data)
      setFormUpdate({
        name: datas.data.name,
        bonus: datas.data.bonus,
        picture: datas.data.picture,
        is_pirate: datas.data.is_pirate,
        crew: datas.data.crew,
      })
    })
  }, [id])

  function updateCharacter(event) {
    event.preventDefault()
    const { name, bonus, picture, is_pirate, crew } = { ...formUpdate }
    let url = `http://localhost:3010/character/${id}`

    var is_pirate_val = false

    if (is_pirate == "1") {
      is_pirate_val = true
    }

    axios.put(url, {
      id,
      name,
      bonus,
      picture,
      is_pirate: is_pirate_val,
      crew,
    })

    setTimeout(() => {
      window.location.href = `http://localhost:3000/`
    }, 1000)
  }

  async function deleteCharacter() {
    let url = `http://localhost:3010/character/${id}`
    await axios.delete(url)
    setTimeout(() => {
      window.location.href = `http://localhost:3000/`
    }, 1000)
  }

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrew(datas.data)
    })
  }, [])

  return (
    <div className="addCharacter">
      <Container>
        <h1>Formulaire de modification d'équipage</h1>
        <hr />
        <Form onSubmit={(e) => updateCharacter(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              defaultValue={character.name}
              value={formUpdate.name}
              type="text"
              placeholder="Nom du Pirate"
              required
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.name = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Prime</Form.Label>
            <Form.Control
              defaultValue={character.bonus}
              type="number"
              placeholder="prime du pirate"
              required
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.bonus = e.target.value
                setFormUpdate(tmp)
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo Pirates</Form.Label>
            <Form.Control
              defaultValue={character.picture}
              value={formUpdate.picture}
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

          <Form.Group className="mb-3">
            <Form.Label>recherché</Form.Label>
            <Form.Check
              defaultValue={character.is_pirate == "1" ? true : false}
              type="checkbox"
              onChange={(e) => {
                let tmp = { ...formUpdate }
                tmp.is_pirate = e.target.value
                setFormUpdate(tmp)
              }}
              checked={formUpdate.is_pirate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Équipage</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                console.log(e.target.value)
                let tmp = { ...formUpdate }
                tmp.crew = e.target.value
                setFormUpdate(tmp)
              }}
            >
              <option value="INDEFINI"> INDEFINI </option>
              {crews.map((crew, index) => (
                <option
                  key={index}
                  selected={character.crew == crew._id}
                  value={crew._id}
                >
                  {crew.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <button className="btn-form" type="submit">
            <FontAwesomeIcon icon={faEdit} /> Modifier
          </button>
        </Form>
        <Button variant="danger" onClick={deleteCharacter} type="submit">
          Supprimer
        </Button>
      </Container>
    </div>
  )
}

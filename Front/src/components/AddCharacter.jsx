import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { Container, Row, Col, Button, Form } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddCrew() {
  const [formAjout, setFormAjout] = useState({})
  const [crews, setCrew] = useState([])
/*
  useEffect(() => {
    axios.get("http://localhost:3010/character").then((datas) => {
      setCrews(datas.data)
      console.log(datas.data)
    })
  }, [])
  */

  function addCharacter(event) {
    event.preventDefault()
    const { name, bonus, picture, is_pirate, crew} = { ...formAjout }
    //alert(category)
    let url = `http://localhost:3010/character`

    console.log(is_pirate);
    
    var is_pirate_val = 0;

    if(is_pirate == "1"){
      is_pirate_val = 1
    }

    axios.post(url, {
      name,
      bonus,
      picture,
      is_pirate_val,
      crew,
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrew(datas.data)
    })
  }, [])

  console.log(crews)

/*{options.getCrew(({ value, label }, index) => <option value={value} >{label}</option>)}*/
  return (
    <div className="addCharacter">
      <Container className="form">
        <Row mt={5}>
          <Col md="12">
            <h1 style={{textAlign:"center"}}>Ajouter un pirate</h1>
            <hr />
            <Form onSubmit={(e) => addCharacter(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  value={formAjout.name}
                  type="text"
                  placeholder="Nom du Pirate"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.name = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Prime</Form.Label>
                <Form.Control
                  value={formAjout.ship}
                  type="text"
                  placeholder="prime du pirate"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.bonus = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  value={formAjout.picture}
                  type="text"
                  placeholder="photo pirate"
                  required
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.picture = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Recherché ?</Form.Label>
                <Form.Check
                  value="1"
                  type="checkbox"
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.is_pirate = e.target.value
                    setFormAjout(tmp)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Équipage</Form.Label>
                  <Form.Control as="select" > 
                  value={formAjout.crew}
                  onChange={(e) => {
                    let tmp = { ...formAjout }
                    tmp.crew = e.target.value
                    setFormAjout(tmp)
                  }}
                  {crews.map((crew, index) => (
                    <option value={crew._id}>
                        {crew.name}
                    </option>
                    ))}
                  </Form.Control>
                
              </Form.Group>

              <button className="btn-form" type="submit">
                <FontAwesomeIcon icon={faPlus} /> Ajouter
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

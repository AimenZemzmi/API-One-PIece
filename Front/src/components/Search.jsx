import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { Container, Button, Form } from "react-bootstrap"

export default function Search() {
  const [searchInput, setSearchInput] = useState("")
  function search(e) {
    e.preventDefault()

    console.log("function search : ", searchInput)
  }

  return (
    <div className="crew">
      <Container>
        <Form onSubmit={(e) => search(e)}>
          <div style={{display:"flex"}}>
            <Form.Control
              placeholder="Recherche d'équipage ou de pirate"
              type="text"
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
            />
            <Button type="submit">Rechercher</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

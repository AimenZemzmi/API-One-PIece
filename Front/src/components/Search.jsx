import "../App.css"
import { useState } from "react"
import { Container, Button, Form } from "react-bootstrap"

export default function Search() {
  const [searchInput, setSearchInput] = useState("")
  function search(e) {
    e.preventDefault()
    window.location.href = `http://localhost:3000/searchParams/${searchInput}`;
  }

  return (
    <div className="search">
      <Container>
        <Form onSubmit={(e) => search(e)}>
          <div style={{ display: "flex" }}>
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

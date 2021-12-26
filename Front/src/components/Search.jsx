import "../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form } from "react-bootstrap"

export default function Search() {
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()
  function search(e) {
    e.preventDefault()
    navigate(`/searchParams/${searchInput}`)
  }

  return (
    <div className="search">
      <Container>
        <Form onSubmit={(e) => search(e)}>
          <Form.Control
            placeholder="Recherche d'équipe ou de pirate"
            type="text"
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
          />
          <Button type="submit">Rechercher</Button>
        </Form>
      </Container>
    </div>
  )
}

import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function SearchParams() {
  const [searchInput] = useState(window.location.pathname.split("/")[2])
  const [crews, setCrews] = useState({})
  const [characters, setCharacters] = useState({})
  useEffect(() => {
    console.log(searchInput)
    const url = `http://localhost:3010/search/?search=${searchInput}`
    axios.get(url).then((datas) => {
      setCrews(datas.data.crews)
      setCharacters(datas.data.characters)
    })
  }, [searchInput])

  return (
    <div className="crew">
      <Container>
        <p>Équipages :</p>
        <ul>
          {Array.from(crews, (crew, index) => {
            return (
              <div key={index}>
                <Link
                  to={{
                    pathname: `/crew/${crew._id}`,
                  }}
                  className="btn-form"
                >
                  {crew.name}
                </Link>
              </div>
            )
          })}
        </ul>
      </Container>
      <Container>
        <p>Pirates :</p>
        <ul>
          {Array.from(characters, (character, index) => {
            return (
              <div key={index}>
                <Link
                  to={{
                    pathname: `/character/${character._id}`,
                  }}
                  className="btn-form"
                >
                  {character.name}
                </Link>
              </div>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

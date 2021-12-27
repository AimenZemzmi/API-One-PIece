import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { Container, Card } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const [crews, setCrews] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrews(datas.data)
    })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3010/character").then((datas) => {
      setCharacters(datas.data)
    })
  }, [])

  return (
    <div className="home">
      <div className="equipage">
        <h2 style={{ textAlign: "center" }}>Équipages</h2>
        <div className="crews">
          {crews.map((crew, index) => (
            <Card className="card" key={index}>
              <img
                className="card-img-top"
                src={crew.picture}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{crew.name}</h5>
                <p className="card-text">
                  Navire : <b>{crew.ship}</b>
                </p>
                <Link
                  to={{
                    pathname: `/crew/${crew._id}`,
                  }}
                  className="btn-form"
                >
                  <FontAwesomeIcon icon={faEdit} /> Modifier
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="pirate">
        <h2 style={{ textAlign: "center" }}>Pirates</h2>
        <div className="pirates">
          {characters.map((character, index) => (
            <Card
              className="card"
              key={index}
              style={{ width: "18rem", marginTop: "10px" }}
            >
              {character.is_pirate == true ? <h1>Wanted</h1> : ""}
              <img
                className="card-img-top"
                src={character.picture}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  Prime : <b>{character.bonus}</b>
                </p>
                <p className="card-text">
                  Equipage : <b> {crews.map((crew, index) => (
                    character.crew == crew._id ? crew.name : ""
                  ))}</b>
                </p>
                <Link
                  to={{
                    pathname: `/character/${character._id}`,
                  }}
                  className="btn-form"
                >
                  <FontAwesomeIcon icon={faEdit} /> Modifier
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

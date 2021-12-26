import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { Container, Row, Col, Card } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search"

export default function Home() {
  const [crews, setCrews] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrews(datas.data)
    })
  }, [])

  return (
    <div className="home">

      <div className="equipage">
        <h2 style={{textAlign: "center"}}>Équipages</h2>   
        <div className="crews">
          {crews.map((crew, index) => (
            <Card class="card" key={index} >
              <img class="card-img-top" src={crew.picture} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{crew.name}</h5>
                <p class="card-text">Navire : <b>{crew.ship}</b></p>
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
    </div>
  )
}

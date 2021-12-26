import "../App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { Container, Row, Col } from "react-bootstrap"

export default function Home() {
  const [crews, setCrews] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3010/crew").then((datas) => {
      setCrews(datas.data)
    })
  }, [])

  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <ul>
              {crews.map((crew, index) => (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `/crew/${crew._id}`,
                    }}
                  >
                    {crew.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

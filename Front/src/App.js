import "./App.css"
import NavbarApp from "./components/NavbarApp"
import Home from "./components/Home"
import AddCrew from "./components/AddCrew"
import AddCharacter from "./components/AddCharacter"
import Crew from "./components/Crew"
import Character from "./components/Character"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Router>
        <div>
          <Routes>
            <Route exact path="/">
              <Route exact path="/" element={<Home />}></Route>
            </Route>
            <Route exact path="/addCrew">
              <Route exact path="/addCrew" element={<AddCrew />}></Route>
            </Route>
            <Route exact path="/AddCharacter">
              <Route exact path="/AddCharacter" element={<AddCharacter />}></Route>
            </Route>
            <Route exact path="/crew/:id">
              <Route exact path="/crew/:id" element={<Crew id=":1" />}></Route>
            </Route>
            <Route exact path="/character/:id">
              <Route exact path="/character/:id" element={<Character id=":1" />}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

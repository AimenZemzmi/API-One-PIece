import "./App.css"
import NavbarApp from "./components/NavbarApp"
import Home from "./components/Home"
import AddCrew from "./components/AddCrew"
import AddCharacter from "./components/AddCharacter"
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
          </Routes>
        </div>
      </Router>
    </div>
  )
}

import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

export const Routes = {
  homepage: "/",
  aboutpage: "/about",
  contactpage: "/contact",
}
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={Routes.homepage} render={() => <Home />} />
          <Route exact path={Routes.aboutpage} render={() => <About />} />
          <Route exact path={Routes.contactpage} render={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

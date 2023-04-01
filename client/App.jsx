import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientDetail from "./routes/ClientDetail";
import UpdatePage from "./routes/UpdatePage";
import Home from './routes/Home';
import { ClientsContextProvider } from "./context/ClientsContext";
import './index.css'

class App extends Component {
  render() {
    return (
      <ClientsContextProvider>
        <div>
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clients/:id/update" component={UpdatePage} />
                <Route exact path="/clients/:id" component={ClientDetail} />
              </Switch>
          </Router>
        </div>
      </ClientsContextProvider>
    )
  }
}

export default App;
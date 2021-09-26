import { Container } from "react-bootstrap";
import { Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Teams from "./container/teams/Teams";
import TeamsDetail from "./container/teams/TeamsDetail";
import TeamsSave from "./container/teams/TeamsSave";
import TeamsUpdate from "./container/teams/TeamsUpdate";

function App() {
  return (
    <div className="main">
      <Header />
      <Container>
        <Route path="/teams" exact={true} component={Teams} />
        <Route path="/teamsSave" exact={true} component={TeamsSave} />
        <Route path="/teams/:id" exact={true} component={TeamsDetail} />
        <Route path="/teamsUpdate/:id" exact={true} component={TeamsUpdate} />
      </Container>
    </div>
  );
}

export default App;

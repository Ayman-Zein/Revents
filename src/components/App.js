import React from "react";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import EventDetailed from "./event/EventDetailed/EventDetailed";
import PeopleDashboard from "./user/peopleDashboard/PeopleDashboard";
import UserDetailed from "./user/userDetailed/UserDetailed";
import SettingsDashboard from "./user/settings/SettingsDashboard";
import EventForm from "./event/EventForm/EventForm";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/people" component={PeopleDashboard} />
              <Route exact path="/events/:id" component={EventDetailed} />
              <Route exact path="/profile/:id" component={UserDetailed} />
              <Route exact path="/createEvent" component={EventForm} />
              <Route path="/settings" component={SettingsDashboard} />
            </Container>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
}

export default App;

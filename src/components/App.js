import React from "react";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </React.Fragment>
  );
}

export default App;

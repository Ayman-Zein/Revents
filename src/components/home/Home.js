import React from "react";
import {
  Icon,
  Button,
  Image,
  Header,
  Container,
  Segment,
} from "semantic-ui-react";

const Home = ({ history }) => {
  // console.log(props);
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/images/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;

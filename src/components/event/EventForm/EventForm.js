import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  };
  componentDidMount() {
    if (this.props.eventSelected) {
      this.setState({
        ...this.props.eventSelected,
      });
    }
  }
  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.onUpdateEvent(this.state);
    } else {
      this.props.onSubmitForm(this.state);
    }
  };
  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onSubmitForm}>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleChangeInput}
              name="title"
              value={title}
              placeholder="Event title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              onChange={this.handleChangeInput}
              name="date"
              value={date}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleChangeInput}
              name="city"
              value={city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleChangeInput}
              name="venue"
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.handleChangeInput}
              name="hostedBy"
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default EventForm;

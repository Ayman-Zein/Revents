import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  renderList(events) {
    return events.map((event) => (
      <EventListItem key={event.id} event={event} />
    ));
  }
  render() {
    const { events } = this.props;
    return <React.Fragment>{this.renderList(events)}</React.Fragment>;
  }
}
export default EventList;

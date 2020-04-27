import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  renderList(events, onSelectEvent, onDeleteEvent) {
    return events.map((event) => (
      <EventListItem
        key={event.id}
        event={event}
        onDeleteEvent={onDeleteEvent}
        onSelectEvent={onSelectEvent}
      />
    ));
  }
  render() {
    const { events, onSelectEvent, onDeleteEvent } = this.props;
    return (
      <React.Fragment>
        {this.renderList(events, onSelectEvent, onDeleteEvent)}
      </React.Fragment>
    );
  }
}
export default EventList;

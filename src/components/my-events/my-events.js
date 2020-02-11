import React from "react";
import { useHistory } from "react-router-dom";
import { EventsList } from "../events-list/events-list";
import { EventsService } from "../../database/database";

export const MyEvents = () => {
  let history = useHistory();

  let events = EventsService.find();
  const handleClick = () => {
    history.push("/add-event");
  };
  return (
    <EventsList events={events} title='My Events'>
      <button className='primary-btn primary-btn--log-in' onClick={handleClick}>
        Add Event
      </button>
    </EventsList>
  );
};

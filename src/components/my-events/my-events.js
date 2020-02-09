import React from "react";
import { EventsList } from "../events-list/events-list";
import { EventsService } from "../../database/database";

export const MyEvents = () => {
  let events = EventsService.find();
  return <EventsList events={events} title='My Events'></EventsList>;
};

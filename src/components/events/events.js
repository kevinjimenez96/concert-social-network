import React from "react";
import { EventsList } from "../events-list/events-list";
import { EventsService } from "../../database/database";

export const Events = () => {
  let events = EventsService.find();
  return <EventsList events={events} title='Events'></EventsList>;
};

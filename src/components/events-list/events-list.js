import React from "react";
import { EventItem } from "../event-item/event-item";
import { Link } from "react-router-dom";

export const EventsList = ({ events, title, children }) => {
  return (
    <section className='events-list'>
      <div className='events-list__header'>
        <h2 className='events-list__title title'>{title}</h2>
        {children}
      </div>
      <ul className='events-list__list'>
        {events.map(event => {
          return (
            <li className='events-list__item' key={event.name}>
              <Link to={`/events/${event.name}`}>
                <EventItem event={event}></EventItem>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

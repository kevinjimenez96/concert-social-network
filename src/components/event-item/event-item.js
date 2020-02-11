import React from "react";

export const EventItem = ({ event }) => {
  event.date = new Date(event.date);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  return (
    <article className='event-item'>
      <img
        className='event-item__img'
        src={event.image}
        alt={`${event.name} event`}
      />
      <div className='event-item__info'>
        <div className='event-item__header'>
          <h3 className='event-item__name'>{event.name}</h3>
          <div className='event-item__owner'>
            <span className='label'>Organizer:</span> {event.owner}
          </div>
        </div>
        <div className='event-item__date'>{`${event.date.getDate()}-${
          months[event.date.getMonth()]
        }-${event.date.getFullYear()}`}</div>
        <p className='event-item__description'>{event.description}</p>
      </div>
    </article>
  );
};

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EventsService } from "../../database/database";
import { SearchSong } from "../search-song/search-song";
import { Playlist } from "../playlist/playlist";

export const EventDetail = () => {
  const [newSong, setnewSong] = useState(false);
  const { name } = useParams();
  let event = EventsService.findByName(name);
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
    <section className='event-detail'>
      <section className='event-detail__section'>
        <img
          className='event-detail__img'
          src={event.image}
          alt={`${event.name} event`}
        />
        <div className='event-detail__info'>
          <div className='event-detail__header'>
            <h2 className='event-detail__name'>{event.name}</h2>
          </div>
          <div className='event-detail__date'>{`${event.date.getDate()}-${
            months[event.date.getMonth()]
          }-${event.date.getFullYear()}`}</div>
          <div className='event-detail__owner'>
            <span className='label'>Organizer:</span> {event.owner}
          </div>
          <p className='event-detail__description'>{event.description}</p>
        </div>
      </section>

      <section className='playlist'>
        <SearchSong
          playlist_id={event.playlist}
          setnewSong={setnewSong}
        ></SearchSong>
        <Playlist
          playlist_id={event.playlist}
          setnewSong={setnewSong}
          newSong={newSong}
        ></Playlist>
      </section>
    </section>
  );
};

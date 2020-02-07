import React, { useState } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { EventsService } from "../../database/database";

export const HomeCarousel = () => {
  const [nextEvents] = useState(EventsService.findNext());
  return (
    <Carousel className='carousel'>
      {nextEvents.map(event => (
        <img
          key={event.name}
          className='carousel__img'
          src={event.image}
          alt={`The event ${event.name}`}
        ></img>
      ))}
    </Carousel>
  );
};

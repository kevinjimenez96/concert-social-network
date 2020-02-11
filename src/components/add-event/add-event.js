import React, { useState } from "react";
import { Input, DatePicker } from "antd";
import { useAuth0 } from "../../react-auth0-spa";
import EventCustom from "../../models/event";
import { UsersService, EventsService } from "../../database/database";
import { Redirect } from "react-router-dom";

const { TextArea } = Input;

export const AddEvent = () => {
  const [posted, setPosted] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuth0();

  const handleSubmit = e => {
    e.preventDefault();

    let body = {
      name: name,
      description: description,
      public: false,
      collaborative: true
    };
    var miInit = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + UsersService.findByEmail(user.email).token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    let id = UsersService.findByEmail(user.email).id;
    fetch(`https://api.spotify.com/v1/users/${id}/playlists`, miInit)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.id);
        let newEvent = new EventCustom(
          name,
          new Date(date),
          user.email,
          "/assets/" + image,
          description,
          res.id,
          [],
          null
        );
        EventsService.insert(newEvent);
        setPosted(true);
      });
  };
  return posted ? (
    <Redirect to='/events'></Redirect>
  ) : (
    <section className='add-event'>
      <div className='add-event__container'>
        <h2 className='add-event__title title'>Add event</h2>
        <form className='add-event__form' onSubmit={handleSubmit}>
          <div className='add-event__input-container'>
            <label className='add-event__label label' htmlFor='name'>
              Name:{" "}
            </label>
            <Input
              id='name'
              className='add-event__input'
              placeholder='Enter the event name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='add-event__input-container'>
            <label className='add-event__label label' htmlFor='date'>
              Date:{" "}
            </label>
            <DatePicker
              id='date'
              className='add-event__input'
              placeholder='Enter the event date'
              onChange={(date, datestring) => setDate(datestring)}
            />
          </div>
          <div className='add-event__input-container'>
            <label className='add-event__label label' htmlFor='description'>
              Description:{" "}
            </label>
            <TextArea
              id='description'
              className='add-event__input'
              placeholder='Enter the event name'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className='add-event__input-container'>
            <label className='add-event__label label' htmlFor='image'>
              Image:{" "}
            </label>
            <Input
              id='image'
              className='add-event__input'
              placeholder='Enter the event image'
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
          <button type='submit' className='primary-btn add-event__button'>
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

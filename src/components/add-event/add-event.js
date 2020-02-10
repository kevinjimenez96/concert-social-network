import React from "react";
import { Input, DatePicker } from "antd";

const { TextArea } = Input;

export const AddEvent = () => {
  return (
    <section className='add-event'>
      <div className='add-event__container'>
        <h2 className='add-event__title title'>Add event</h2>
        <form className='add-event__form'>
          <div className='add-event__input-container'>
            <label className='add-event__label label' htmlFor='name'>
              Name:{" "}
            </label>
            <Input
              id='name'
              className='add-event__input'
              placeholder='Enter the event name'
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

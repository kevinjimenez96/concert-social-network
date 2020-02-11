import React from "react";

export const SongItem = ({ song }) => {
  return (
    <article className='song-item'>
      <img
        className='song-item__img'
        src={song.album.images[0].url}
        alt={song.album.name}
      ></img>
      <div className='song-item__info'>
        <div className='song-item__name'>{song.name}</div>
        <div className='song-item__artist'>{song.artists[0].name}</div>
      </div>
    </article>
  );
};

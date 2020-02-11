import React, { useState, useEffect } from "react";
import { SongItem } from "../song-item/song-item";
import { UsersService } from "../../database/database";

export const Playlist = ({ playlist_id, newSong, setnewSong }) => {
  const [playlist, setplaylist] = useState([]);

  useEffect(() => {
    const getPlaylist = () => {
      var miInit = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + UsersService.findByEmail("kevinja9608@gmail.com").token
        }
      };
      fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, miInit)
        .then(res => res.json())
        .then(res => {
          setplaylist(res.tracks.items);
          setnewSong(false);
        });
    };
    getPlaylist();
  }, [playlist_id, newSong, setnewSong]);

  return (
    <section className='playlist'>
      <ul className='playlist__list'>
        {playlist.map(song => (
          <li key={song.track.id} className='playlist__item'>
            <SongItem song={song.track}></SongItem>
          </li>
        ))}
      </ul>
    </section>
  );
};

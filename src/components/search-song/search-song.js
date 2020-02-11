import Autosuggest from "react-autosuggest";
import React, { useState } from "react";
import { UsersService } from "../../database/database";
import { SongItem } from "../song-item/song-item";

let theme = {
  container: "autosuggest__container",
  containerOpen: "autosuggest__container--open",
  input: "autosuggest__input",
  inputOpen: "autosuggest__input--open",
  inputFocused: "autosuggest__input--focused",
  suggestionsContainer: "autosuggest__suggestions-container",
  suggestionsContainerOpen: "autosuggest__suggestions-container--open",
  suggestionsList: "autosuggest__suggestions-list",
  suggestion: "suggestion",
  suggestionFirst: "autosuggest__suggestion--first",
  suggestionHighlighted: "autosuggest__suggestion--highlighted",
  sectionContainer: "autosuggest__section-container",
  sectionContainerFirst: "autosuggest__section-container--first",
  sectionTitle: "autosuggest__section-title"
};

export const SearchSong = ({ playlist_id, setnewSong }) => {
  const [value, setvalue] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const onChange = (event, { newValue }) => {
    setvalue(newValue);
  };
  const inputProps = {
    placeholder: "Type a song",
    value,
    onChange: onChange
  };

  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  function renderSuggestion(suggestion) {
    return <SongItem song={suggestion}></SongItem>;
  }

  function loadSuggestions(value) {
    var miInit = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " + UsersService.findByEmail("kevinja9608@gmail.com").token
      }
    };
    fetch(
      `https://api.spotify.com/v1/search?q=${value}&type=track&limit=3`,
      miInit
    )
      .then(res => res.json())
      .then(res => {
        setsuggestions(res.tracks.items);
      });
  }

  function onSuggestionsFetchRequested({ value }) {
    loadSuggestions(value);
  }

  function onSuggestionsClearRequested() {
    setsuggestions([]);
  }

  function onSuggestionSelected(event, { suggestion }) {
    console.log(suggestion);

    var miInit = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " + UsersService.findByEmail("kevinja9608@gmail.com").token
      }
    };
    fetch(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=spotify:track:${suggestion.id}`,
      miInit
    )
      .then(res => res.json())
      .then(res => {
        setnewSong(true);
        setvalue("");
      });
  }

  const renderInputComponent = inputProps => (
    <div className='autosuggest__input-container'>
      <h3 className='autosuggest__input__label label'>Add a new song:</h3>
      <input {...inputProps} />
    </div>
  );

  return (
    <div>
      <Autosuggest
        renderInputComponent={renderInputComponent}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
    </div>
  );
};

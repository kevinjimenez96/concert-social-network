import Autosuggest from "react-autosuggest";
import React, { useState } from "react";
import { UsersService } from "../../database/database";
import { SongItem } from "../song-item/song-item";

let theme = {
  container: "react-autosuggest__container",
  containerOpen: "react-autosuggest__container--open",
  input: "react-autosuggest__input",
  inputOpen: "react-autosuggest__input--open",
  inputFocused: "react-autosuggest__input--focused",
  suggestionsContainer: "react-autosuggest__suggestions-container",
  suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
  suggestionsList: "autosuggest__suggestions-list",
  suggestion: "react-autosuggest__suggestion",
  suggestionFirst: "react-autosuggest__suggestion--first",
  suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
  sectionContainer: "react-autosuggest__section-container",
  sectionContainerFirst: "react-autosuggest__section-container--first",
  sectionTitle: "react-autosuggest__section-title"
};

export const SearchSong = ({ playlist_id }) => {
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
        console.log(res);
      });
  }

  return (
    <div>
      <Autosuggest
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

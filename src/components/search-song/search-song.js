import Autosuggest from "react-autosuggest";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { UsersService, EventsService } from "../../database/database";

export const SearchSong = () => {
  const [value, setvalue] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const onChange = (event, { newValue }) => {
    setvalue(newValue);
  };
  const inputProps = {
    placeholder: "Type 'c'",
    value,
    onChange: onChange
  };

  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  function renderSuggestion(suggestion) {
    return <span>{suggestion.name}</span>;
  }

  function loadSuggestions(value) {
    var miInit = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " + UsersService.findByEmail("kevinja9608@gmail.com").token
      }
    };
    let suggestions = fetch(
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

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

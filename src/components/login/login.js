import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { useSpotifyToken } from "../../hooks";
import { Spin } from "antd";
import User from "../../models/user";
import { UsersService } from "../../database/database";

export const Login = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const { spotifyToken, setSpotifyToken } = useSpotifyToken();
  const [loading, setLoading] = useState(true);
  const params = new URLSearchParams(window.location.hash.substring(1));
  useEffect(() => {
    if (spotifyToken === null) {
      setSpotifyToken({
        spotifyToken: params.get("access_token"),
        expiresIn: params.get("expires_in")
      });
    }
  }, [params, setSpotifyToken, spotifyToken]);

  useEffect(() => {
    if (spotifyToken != null) {
      var miInit = {
        method: "GET",
        headers: { Authorization: "Bearer " + spotifyToken }
      };
      fetch("https://api.spotify.com/v1/me", miInit)
        .then(res => res.json())
        .then(res => {
          let newUser = new User(
            user.email,
            res.id,
            user.given_name + " " + user.family_name,
            res.images[0].url,
            spotifyToken
          );
          if (!UsersService.exists(user.email)) {
            UsersService.insert(newUser);
          } else {
            UsersService.update(newUser);
          }
        });
    } else {
      setLoading(false);
    }
  }, [spotifyToken, user]);

  if (!isAuthenticated) {
    loginWithRedirect({});
  } else {
    if (loading || !spotifyToken) {
      return (
        <div className='large-spin-container'>
          <Spin size='large' />
        </div>
      );
    } else {
      return <Redirect to='home' />;
    }
  }
};

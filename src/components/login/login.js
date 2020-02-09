import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { useSpotifyToken } from "../../hooks";

export const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { setSpotifyToken } = useSpotifyToken();
  const params = new URLSearchParams(window.location.hash.substring(1));
  setSpotifyToken({
    spotifyToken: params.get("access_token"),
    expiresIn: params.get("expires_in")
  });
  if (isAuthenticated) {
    return <Redirect to='/home'></Redirect>;
  } else {
    loginWithRedirect({});
  }
};

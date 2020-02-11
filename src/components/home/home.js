import React from "react";
import { HomeCarousel } from "../home-carousel/home-carousel";
import { useSpotifyToken } from "../../hooks";
import { useAuth0 } from "../../react-auth0-spa";
import { Spin } from "antd";

export const Home = () => {
  const { isAuthenticated, loading } = useAuth0();
  const { spotifyToken } = useSpotifyToken();

  if (isAuthenticated && spotifyToken === null) {
    window.location.href =
      "https://accounts.spotify.com/authorize?client_id=50ea799752964c5885f4d8475d0d06dc" +
      "&redirect_uri=http:%2F%2Flocalhost:3000%2Flogin&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private&response_type=token&state=123";
    if (loading) {
      return (
        <div className='large-spin-container'>
          <Spin size='large' />
        </div>
      );
    }
  }
  return <HomeCarousel></HomeCarousel>;
};

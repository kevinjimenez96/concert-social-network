import { useContext } from "react";
import { AppContext } from "./app-provider";

export const useSpotifyToken = () => {
  const [state, setState] = useContext(AppContext);
  const setNewData = newData => {
    setState(newData);
  };

  return {
    spotifyToken: state.spotifyToken,
    setSpotifyToken: setNewData
  };
};

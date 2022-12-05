import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const { state: { name, location } } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, location);
  };

  return [saveTrack];
};
import React from "react";
import { useParams } from "react-router-dom";

export const EventDetail = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

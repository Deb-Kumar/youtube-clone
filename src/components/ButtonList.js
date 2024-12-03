import React from "react";
import Button from "./Button";
import { YOUTUBE_CATEGORIES } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="container-snap flex overflow-x-auto w-[105rem]">
      {YOUTUBE_CATEGORIES.map((categories) => (
        <Button key={categories} name={categories} />
      ))}
    </div>
  );
};

export default ButtonList;

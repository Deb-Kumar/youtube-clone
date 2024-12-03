import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-6 mb-2 pr-48 shadow-2xl w-48">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <ul className="pt-5">
        <h1 className="font-bold py-2">Library</h1>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 py-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul className="pt-5">
        <h1 className="font-bold py-2">Subscriptions</h1>
        <li>Mir Afsar Ali</li>
        <li>Dhruv Rathee</li>
        <li>Studified</li>
        <li>Mirchi Bangla</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState, useCallback } from "react"; // Added useCallback
import {
  HAMBURGER_ICON_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cachedResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Corrected typo here
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  // Wrap the searchSuggestionsHandler in useCallback to ensure it's stable
  const searchSuggestionsHandler = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  }, [dispatch, searchQuery]); // Make sure to include searchQuery in the dependency array

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else if (searchQuery) {
        searchSuggestionsHandler();
      } else {
        setSuggestions([]); // Clear suggestions if searchQuery is empty
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, searchSuggestionsHandler]); // Include searchSuggestionsHandler in dependency array

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON_URL}
        />
        <img className="h-8 mx-6" alt="youtube-logo" src={YOUTUBE_LOGO_URL} />
      </div>
      <div className="col-span-10 pl-96">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value); // Use updated search query value
              if (e.target.value === "") {
                setShowSuggestions(false);
              } else {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute  bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-200"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON_URL} />
      </div>
    </div>
  );
};

export default Head;

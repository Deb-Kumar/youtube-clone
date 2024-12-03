import React, { useEffect, useState, useCallback } from "react";  // Add useCallback hook
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getVideoDetails = useCallback(async () => {
    try {
      const videoId = searchParams.get("v");
      if (!videoId) {
        setError("No video ID found in the search parameters.");
        setLoading(false);
        return;
      }
      const data = await fetch(`${YOUTUBE_VIDEO_INFO_API}${videoId}`);
      const json = await data.json();

      if (json.items && json.items.length > 0) {
        setDetails(json.items[0].snippet);
      } else {
        setError("Video details not found.");
      }
    } catch (error) {
      setError("Error fetching video details.");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);  // Add searchParams to the dependency array

  useEffect(() => {
    getVideoDetails();
    dispatch(closeMenu());
  }, [dispatch, getVideoDetails]);  // Include getVideoDetails in the dependency array

  return (
    <div className="flex flex-col w-full">
      <div className="p-5 pl-28 flex w-full">
        <div>
          <iframe
            className="rounded-lg shadow-lg"
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
            allow="autoplay"
            title="YouTube video player"
            allowFullScreen
          />
          {loading ? (
            <p>Loading video details...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div>
              <VideoDetails data={details} />
            </div>
          )}
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

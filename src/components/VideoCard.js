import React from "react";

// Helper function to format the view count
const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "K";
  }
  return viewCount;
};

// Helper function to format the publish time (in days, weeks, months, or years)
const formatPublishTime = (publishedAt) => {
  const currentTime = new Date();
  const publishDate = new Date(publishedAt);
  const timeDiffInMs = currentTime - publishDate; // Difference in milliseconds
  const timeDiffInSec = timeDiffInMs / 1000; // Convert to seconds
  const timeDiffInMin = timeDiffInSec / 60; // Convert to minutes
  const timeDiffInHours = timeDiffInMin / 60; // Convert to hours
  const timeDiffInDays = timeDiffInHours / 24; // Convert to days
  const timeDiffInMonths = timeDiffInDays / 30; // Approximate months
  const timeDiffInYears = timeDiffInDays / 365; // Approximate years

  if (timeDiffInYears >= 1) {
    return `${Math.floor(timeDiffInYears)} year${Math.floor(timeDiffInYears) > 1 ? "s" : ""} ago`;
  } else if (timeDiffInMonths >= 1) {
    return `${Math.floor(timeDiffInMonths)} month${Math.floor(timeDiffInMonths) > 1 ? "s" : ""} ago`;
  } else if (timeDiffInDays >= 7) {
    const weeks = Math.floor(timeDiffInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (timeDiffInDays >= 1) {
    return `${Math.floor(timeDiffInDays)} day${Math.floor(timeDiffInDays) > 1 ? "s" : ""} ago`;
  } else if (timeDiffInHours >= 1) {
    return `${Math.floor(timeDiffInHours)} hour${Math.floor(timeDiffInHours) > 1 ? "s" : ""} ago`;
  } else if (timeDiffInMin >= 1) {
    return `${Math.floor(timeDiffInMin)} minute${Math.floor(timeDiffInMin) > 1 ? "s" : ""} ago`;
  } else {
    return `${Math.floor(timeDiffInSec)} second${Math.floor(timeDiffInSec) > 1 ? "s" : ""} ago`;
  }
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li className="flex items-center space-x-2">
          <span>{formatViewCount(statistics.viewCount)} views</span>
          <span>&#183;</span> {/* The dot separator */}
          <span>{formatPublishTime(publishedAt)}</span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

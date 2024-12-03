import React from "react";

const VideoDetails = ({ data }) => {
  if (!data) return;
  const { title, description } = data;
  return (
    <div className=" my-5 flex flex-wrap">
      <p className="font-bold text-3xl py-2 my-1">{title}</p>
      <p className="w-[75rem] text-xl overflow-ellipsis line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default VideoDetails;

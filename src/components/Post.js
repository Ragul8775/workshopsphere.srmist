import React from 'react';

const Post = ({ _id, title, summary, cover, content }) => {
  const MAX_SUMMARY_LENGTH = 150; // Maximum length for the summary

  // Replace backslashes with forward slashes in the cover path
  const sanitizedCoverPath = cover.replace(/\\/g, '/');
  const imageUrl = `https://workshopsphere-backend.onrender.com/${sanitizedCoverPath}`;
   console.log(imageUrl)
  // Truncate the summary if it exceeds the maximum length
  const truncatedSummary =
    summary.length > MAX_SUMMARY_LENGTH
      ? summary.substring(0, MAX_SUMMARY_LENGTH) + '...' // Add ellipses
      : summary;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72">
      <div className="h-32">
        <img src={imageUrl} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{truncatedSummary}</p>
      </div>
    </div>
  );
};

export default Post;
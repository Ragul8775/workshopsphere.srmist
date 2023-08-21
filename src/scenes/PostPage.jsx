import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const { id } = useParams();
  
  useEffect(() => {
    // Cleanup function to cancel the fetch if the component unmounts
    let isMounted = true;

    fetch(`http://localhost:6001/admin/projects/${id}`)
      .then(response => response.json())
      .then(postInfo => {
        if (isMounted) {
          setPostInfo(postInfo);
          setLoading(false); // Set loading to false when data is fetched
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (isMounted) {
          setLoading(false); // Make sure to stop loading even on error
        }
      });

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [id]);

  // Don't render the img tag until postInfo is available
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        postInfo && <img src={`http://localhost:6001/${postInfo.cover.replace(/\\/g, '/')}`} alt="Post Cover" />
      )}
    </div>
  );
};

export default PostPage;

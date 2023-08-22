import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const formatDate = dateString => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  useEffect(() => {
    let isMounted = true;

    fetch(`http://localhost:6001/admin/projects/${id}`)
      .then(response => response.json())
      .then(postInfo => {
        if (isMounted) {
          console.log('Fetched postInfo:', postInfo);
          setPostInfo(postInfo);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Check if postInfo is available before rendering
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className='mt-8 '>
      <div className=" mb-4  md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))' }}></div>
        {postInfo && <img src={`http://localhost:6001/${postInfo.cover.replace(/\\/g, '/')}`} alt="Post Cover" className='absolute left-0 top-0 w-full h-full z-0 object-cover' />}
        <div className='p-4 absolute bottom-0 left-0 z-20'>
          {postInfo && <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>{postInfo.title}</h2>}
          <span className="font-semibold text-gray-400 text-xs">{postInfo && formatDate(postInfo.createdAt)}</span>
        </div>
      </div>

      {/* Render the post content */}
      {postInfo && (
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed' />
      )}
    </main>
  );
};

export default PostPage;

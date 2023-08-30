import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PostPage = ({ isLoggedIn }) => {
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const formatDate = dateString => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const  handleDelete = ()=>{
    fetch(`https://workshopsphere-backend.onrender.com/projects/${id}`,{
      method:'DELETE',
    })
    .then(response=>response.json())
    .then(data=>{
      console.log('Post deleted:',data);
     navigate('/project-page')
    })
    .catch(error=>{
      console.error('Error deleting post:',error)
    })
  }
  useEffect(() => {
    let isMounted = true;

    fetch(`https://workshopsphere-backend.onrender.com/projects/${id}`)
      .then(response => response.json())
      .then(postInfo => {
        if (isMounted) {
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
    <main className='mt-8'>
      <div className='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative' style={{ height: '24em' }}>
        <div className='absolute left-0 bottom-0 w-full h-full z-10' style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))' }}></div>
        {postInfo && <img src={`https://workshopsphere-backend.onrender.com/${postInfo.cover.replace(/\\/g, '/')}`} alt="Post Cover" className='absolute left-0 top-0 w-full h-full z-0 object-cover' />}
        <div className='p-4 absolute bottom-0 left-0 z-20'>
          {postInfo && (
            <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>{postInfo.title}</h2>
          )}
          <div className='flex items-center'>
            <span className='font-semibold text-gray-400 text-xs mr-2'>
              {postInfo && formatDate(postInfo.createdAt)}
            </span>
            {isLoggedIn && (
              <div className='flex space-x-2'>
                <Link to={`/edit/${postInfo._id}`}>
                <button className='text-blue-500' onClick={() => console.log('Edit')}>
                  Edit
                </button></Link>
                <button className='text-red-500' onClick={handleDelete}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {postInfo && (
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed' />
      )}
    </main>
  );
};

export default PostPage;
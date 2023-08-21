import React, {useState, useEffect} from 'react'

import Navbar from '../components/Navbar'
import HeroLogo from '../images/sample1.png'
import Post from '../components/Post'
import Footer from '../components/Footer'

const ProjectPage = () => {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    fetch('https://workshopsphere-backend.onrender.com/admin/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(posts => {
        setPosts(posts);
        console.log(posts);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);
  
  
  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className='relative h-[341px] '>
  <img src={HeroLogo} className='w-full h-full' alt='Hero Image' />
  <div className='absolute inset-0 flex flex-col justify-center items-center'>
    <h2 className='font-bold text-white text-2xl max-w-[800px] md:text-5xl'>
      Our Current Projects
    </h2>
    <p className='font-bold text-black'>We bring the future closer</p>
  </div>
</div>
        
<div className='text-center h-20 mt-2 p-4'>
<h1 className='text-4xl font-bold'>Research Projects</h1>
</div>
<div className="flex flex-wrap gap-4 justify-evenly">
 {posts.length > 0 && posts.map(post=>(
  <Post {...post} />
 ))}
</div>
       
      
      </div>
      <Footer/>
    </div>
  );
}

export default ProjectPage
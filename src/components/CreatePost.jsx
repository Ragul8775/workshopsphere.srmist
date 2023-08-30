import React, {useState} from 'react'
import ReactQuill from 'react-quill'

import { Navigate} from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');
  const[summary,setSummary]=useState('');
  const[files,setFiles]=useState('');
  const[redirect, setRedirect]=useState(false);
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  const   formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  async function createNewPost(ev){
    const data =new FormData();
    data.set('title',title);
    data.set('summary',summary);
    data.set('content',content);
    data.set('file',files[0]) ;
    ev.preventDefault();
    console.log(files)
    const response = await fetch('https://workshopsphere-backend.onrender.com/admin/projects',{
      method:'POST',
      body:data,
    }) ;
    if(response.ok){
      setRedirect(true)
    }

  }
  if(redirect){
   return <Navigate to={'/admin-panel'}/>
  }
  return (
   <div>
    
     <div className="block max-w-l rounded-lg bg-brown-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
  <form onSubmit={createNewPost}>
    
     
  <div className="relative mb-6">
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="block min-h-[auto] w-full rounded border border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:border-primary focus:ring-0"
    placeholder="Title"
  />
  
    
</div>

      <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="summary"
        value={summary}
        onChange={e=>setSummary(e.target.value)}
        className="block min-h-[auto] w-full rounded border border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:border-primary focus:ring-0"
        placeholder="Summary" />
     
    </div>

   
    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="file"
        /* value={files} */
        onChange={e=>setFiles(e.target.files)}
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
         />
      
    </div>

   
    <ReactQuill 
    value={content} 
    modules={modules} 
    formats={formats}
    onChange={newValue=>setContent(newValue)}/>
    
    <button
      
      className="inline-block w-full rounded bg-hover-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Create Post
    </button>
  </form>
  </div>
  </div>
   
  )
}

export default CreatePost
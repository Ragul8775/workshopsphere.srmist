import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreateNewsForm = ({ onCreateNews }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:6001/admin/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, summary, isImportant }),
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/admin-panel'} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-medium mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block min-h-[auto] w-full rounded border border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:border-primary focus:ring-0"
          placeholder="Title"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Summary:</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="block min-h-[auto] w-full rounded border border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:border-primary focus:ring-0"
          placeholder="Summary"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Important:</label>
        <input
          type="checkbox"
          checked={isImportant}
          onChange={() => setIsImportant(!isImportant)}
          className="ml-2"
        />
        <span className="ml-2">Mark as Important</span>
      </div>

      <button
        type="submit"
        className="inline-block w-full rounded bg-hover-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Create News
      </button>
    </form>
  );
};

export default CreateNewsForm;

import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/admin/news')
      .then(response => response.json())
      .then(newsData => {
        setNews(newsData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const formatDate = dateString => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="news-section overflow-auto scroll-container">
      {/* News part */}
      <div className="md:pl-8 pt-5 md:pt-10 md:pb-5 px-6 md:max-w-[100%] font-mono">
        <h1 className="flex justify-center text-xl md:text-2xl font-bold">Latest News</h1>
        <ul className="font-semibold">
          {news.map((item, index) => (
            <li key={index} className={`py-4 ${item.isImportant ? 'bg-highlight italic' : ''}`}>
              <span className="text-[#4C4C4C] font-bold">{formatDate(item.date)}:</span> {item.summary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
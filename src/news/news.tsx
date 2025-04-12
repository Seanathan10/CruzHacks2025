// RssFeed.tsx
import React, { useEffect, useState } from "react";

type FeedItem = {
  title: string;
  link: string;
  published: string;
  summary: string;
};

const RssFeed = () => {
  const [items, setItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/rss")
      .then((res) => res.json())
      .then((data) => setItems(data.feed))
      .catch((err) => console.error("Failed to load RSS feed:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">UCSC Press Releases</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="mb-4 border-b pb-2">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </a>
            <p className="text-sm text-gray-500">{item.published}</p>
            <p dangerouslySetInnerHTML={{ __html: item.summary }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RssFeed;

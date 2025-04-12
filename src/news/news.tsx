import { useEffect, useState } from "react";

import "./news.css";

type FeedItem = {
  title: string;
  link: string;
  published: string;
  summary: string;
};

const FEEDS = [
  { name: "Press Releases", key: "press_releases", url: "/rss_press_releases" },
  { name: "Engineering", key: "engineering", url: "/rss_engineering" },
  { name: "Applied Math & Stats", key: "applied_math_stats", url: "/rss_applied_math_stats" },
  { name: "Biomolecular Engineering", key: "biomolecular_engineering", url: "/rss_biomolecular_engineering" },
  { name: "Computer Engineering", key: "computer_engineering", url: "/rss_computer_engineering" },
  { name: "Computer Science", key: "computer_science", url: "/rss_computer_science" },
  { name: "Electrical Engineering", key: "electrical_engineering", url: "/rss_electrical_engineering" },
  { name: "Tech & Info Management", key: "tech_info_mgmt", url: "/rss_technology_and_information_management" },
];

const RssFeed = () => {
  const [selectedFeeds, setSelectedFeeds] = useState<string[]>(["press_releases"]);
  const [items, setItems] = useState<FeedItem[]>([]);

  const toggleFeed = (key: string) => {
    setSelectedFeeds((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const results = await Promise.all(
          FEEDS.filter((f) => selectedFeeds.includes(f.key)).map((feed) =>
            fetch(`http://localhost:8000${feed.url}`).then((res) => res.json())
          )
        );

        const allItems: FeedItem[] = results.flatMap((r) => r.feed || []);
        allItems.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

        setItems(allItems);
      } catch (error) {
        console.error("Failed to fetch feeds:", error);
      }
    };

    fetchFeeds();
  }, [selectedFeeds]);

  return (
    <div className="CheckBoxesContainer">
      <div className="SideBar">
        <h2>Categories</h2>
        {FEEDS.map((feed) => (
          <div key={feed.key} className="IndividualCheckBox">
            <label>
              <input
                type="checkbox"
                checked={selectedFeeds.includes(feed.key)}
                onChange={() => toggleFeed(feed.key)}
              />
              {feed.name}
            </label>
          </div>
        ))}
      </div>

      <div className="RSS_Feed">
        <h1>UCSC News</h1>
        {items.map((item, i) => (
          <div key={i} className="RSS_FeedItem">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p className="date">{item.published}</p>
            <div dangerouslySetInnerHTML={{ __html: item.summary }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RssFeed;

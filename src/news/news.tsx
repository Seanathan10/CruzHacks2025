import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar";
import "./News.css";

type FeedItem = {
  title: string;
  link: string;
  published: string;
  summary: string;
};

const FEEDS = [
  { name: "Press Releases", key: "press_releases", url: "/rss_press_releases" },
  { name: "Engineering", key: "engineering", url: "/rss_engineering" },
  {
    name: "Applied Math & Stats",
    key: "applied_math_stats",
    url: "/rss_applied_math_stats",
  },
  {
    name: "Biomolecular Engineering",
    key: "biomolecular_engineering",
    url: "/rss_biomolecular_engineering",
  },
  {
    name: "Computer Engineering",
    key: "computer_engineering",
    url: "/rss_computer_engineering",
  },
  {
    name: "Computer Science",
    key: "computer_science",
    url: "/rss_computer_science",
  },
  {
    name: "Electrical Engineering",
    key: "electrical_engineering",
    url: "/rss_electrical_engineering",
  },
  {
    name: "Tech & Info Management",
    key: "tech_info_mgmt",
    url: "/rss_technology_and_information_management",
  },
];

const RssFeed = () => {
  const [selectedFeeds, setSelectedFeeds] = useState<string[]>([
    "press_releases",
  ]);
  const [items, setItems] = useState<FeedItem[]>([]);
  const [prevLinks, setPrevLinks] = useState<Set<string>>(new Set());
  const [newlyAnimatedLinks, setNewlyAnimatedLinks] = useState<Set<string>>(new Set());

  const mediaQueryMobile = useMediaQuery("(max-width: 600px)");

  const toggleFeed = (key: string) => {
    setSelectedFeeds((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  useEffect(() => {
    const fetchFeeds = async () => {
      if (selectedFeeds.length === 0) {
        setItems([]);
        setPrevLinks(new Set());
        setNewlyAnimatedLinks(new Set());
        return;
      }
  
      try {
        const results = await Promise.all(
          FEEDS.filter((f) => selectedFeeds.includes(f.key)).map((feed) =>
            fetch(`http://localhost:8000${feed.url}`).then((res) => res.json())
          )
        );
  
        const allItems: FeedItem[] = results.flatMap((r) => r.feed || []);
        allItems.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  
        const newLinks = new Set<string>();
        for (const item of allItems) {
          if (!prevLinks.has(item.link)) {
            newLinks.add(item.link);
          }
        }
  
        setItems(allItems);
        setPrevLinks(new Set(allItems.map((item) => item.link)));
        setNewlyAnimatedLinks(newLinks);
      } catch (error) {
        console.error("Failed to fetch feeds:", error);
      }
    };
  
    fetchFeeds();
  }, [selectedFeeds, prevLinks]);
  
  

  return (
    <>
      {mediaQueryMobile ? <MobileTopBar /> : <DesktopTopBar />}

      <div className="RssFeedMain">
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
          {items.map((item, i) => {
  const isNew = newlyAnimatedLinks.has(item.link);
  return (
    <div
      key={item.link}
      className={`RSS_FeedItem${isNew ? ' animate' : ''}`}
      style={isNew ? { "--delay": `${i * 100}ms` } as React.CSSProperties : undefined}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
      <p className="date">
                {new Date(item.published).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
      <div dangerouslySetInnerHTML={{ __html: item.summary }} />
    </div>
  );
})}


        </div>
      </div>
    </>
  );
};

export default RssFeed;

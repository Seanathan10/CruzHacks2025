import { useEffect, useState } from 'react';
import { getAllLocationMenus, type Menu } from './api';

interface SummaryResponse {
  text: string;
}

const API_URL = "https://api.ucsc.info/generate_dh_summaries";

export default function DiningInsights() {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSummarize = async () => {
      setLoading(true);

      try {
        const allMenus = await getAllLocationMenus();
        const newSummaries: Record<string, string> = {};

        for (const [location, menu] of Object.entries(allMenus)) {
          const summaryPrompt = generatePrompt(location, menu);

          const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              location,
              menu_prompt: summaryPrompt,
              temperature: 0.7,
              max_tokens: 200,
            }),          });

          const data: SummaryResponse = await res.json();
          newSummaries[location] = data.text || 'No summary available.';
        }

        setSummaries(newSummaries);
      } catch (err) {
        console.error('Error generating summaries:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSummarize();
  }, []);

  const generatePrompt = (location: string, menu: Menu): string => {
    let description = `If no data is provided, state that the dining hall is closed. Provide a very concise summary (under 20 words) of today's menu at ${location} dining hall:\n\n`;

    for (const [mealName, meal] of Object.entries(menu)) {
      description += `\n🍽️ *${mealName}*:\n`;
      for (const [groupName, group] of Object.entries(meal)) {
        const items = Object.values(group).map(item => item.name).join(', ');
        description += `- ${groupName}: ${items}\n`;
      }
    }

    description += `\nHighlight any interesting or unique items and mention if vegan/vegetarian/gluten-free items are available. Keep it under 20 words.`;
    return description;
  };

  return (
    <div className="ucsc-card">
      <div className="ucsc-card-header">
        <span className="ucsc-icon">🍴</span>
        <h3>Dining Insights</h3>
      </div>
      <div className="ucsc-card-body">
        {loading && <p>Generating dining summaries...</p>}
        {!loading && Object.keys(summaries).length === 0 && (
          <p>No dining data available today.</p>
        )}
        {!loading &&
          Object.entries(summaries).map(([location, text]) => (
            <div key={location} style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: 4 }}>{location}</h4>
              <p style={{ fontSize: '0.9rem' }}>{text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./Services.css";
import YouTubeEmbed from "./YouTubeEmbed";

const Services: React.FC = () => {
  const allEvents = [
    {
      id: 1,
      type: "Person",
      time: "11:07:40",
      videoId: "RBZgpIW08Fk",
      timestamp: new Date("2024-02-10T11:07:40"),
    },
    {
      id: 2,
      type: "Person",
      time: "11:06:38",
      videoId: "dQw4w9WgXcQ",
      timestamp: new Date("2024-02-10T11:06:38"),
    },
    {
      id: 3,
      type: "Person",
      time: "11:06:01",
      videoId: "tgbNymZ7vqY",
      timestamp: new Date("2024-02-10T11:06:01"),
    },
    {
      id: 4,
      type: "Motion",
      time: "11:05:49",
      videoId: "3JZ_D3ELwOQ",
      timestamp: new Date("2024-02-10T11:05:49"),
    },
    {
      id: 5,
      type: "Motion",
      time: "11:04:30",
      videoId: "w7ejDZ8SWv8",
      timestamp: new Date("2024-02-10T11:04:30"),
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(allEvents[0].videoId);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterCategory, setFilterCategory] = useState("all");

  const getFilteredAndSortedEvents = () => {
    let filteredEvents = allEvents;

    if (filterCategory !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.type === filterCategory
      );
    }

    return filteredEvents.sort((a, b) =>
      sortOrder === "newest"
        ? b.timestamp.getTime() - a.timestamp.getTime()
        : a.timestamp.getTime() - b.timestamp.getTime()
    );
  };

  return (
    <div className="services-container">
      <div className="video-display">
        <YouTubeEmbed videoId={selectedVideo} />
      </div>

      <button
        className="collapse-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "▼ Show Events" : "▲ Hide Events"}
      </button>

      <div className={`event-controls ${isCollapsed ? "collapsed" : ""}`}>
        <select
          className="dropdown"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>

        <select
          className="dropdown"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Person">People</option>
          <option value="Motion">Motion</option>
        </select>
      </div>

      <div className={`event-list ${isCollapsed ? "collapsed" : ""}`}>
        {getFilteredAndSortedEvents().map((event) => (
          <div
            key={event.id}
            className="event-item"
            onClick={() => setSelectedVideo(event.videoId)}
          >
            <div className="event-thumbnail">
              <YouTubeEmbed videoId={event.videoId} />
            </div>
            <div className="event-info">
              <p className="event-type">{event.type}</p>
              <p className="event-time">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

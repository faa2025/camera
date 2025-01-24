import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";

function App() {
  // Extract the video ID from the YouTube link
  const videoId = "4637xjTMXCs";

  return (
    <div className="App">
      <h1>FAA camera</h1>
      <YouTubeEmbed videoId={videoId} />
    </div>
  );
}

export default App;

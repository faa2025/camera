import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";

function App() {
  // Extract the video ID from the YouTube link
  const videoId = "RBZgpIW08Fk";

  return (
    <div className="App">
      <h1>FAA camera</h1>
      <YouTubeEmbed videoId={videoId} />
    </div>
  );
}

export default App;

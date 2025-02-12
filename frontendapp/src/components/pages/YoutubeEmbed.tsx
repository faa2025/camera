import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-embed">
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>

      <style>{`
        .youtube-embed {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%; /* Match button width */
          max-width: 900px;
          aspect-ratio: 16 / 9;
          margin: auto;
        }

        iframe {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .youtube-embed {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default YouTubeEmbed;

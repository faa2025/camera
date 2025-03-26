import React, { useEffect, useState } from "react";
import "./Product.css"; // Add a CSS file for styling

interface ImageData {
  id: number;
  url: string;
  date: string;
  time: string;
}

const Product: React.FC = () => {
  const [imagesByDate, setImagesByDate] = useState<Record<string, ImageData[]>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/saved_human_frame/");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const text = await response.text();

        // Parse the HTML response to extract image URLs
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const imageElements = Array.from(doc.querySelectorAll("a[href$='.jpg']"));

        // Extract date and time from filenames and group by date
        const images = imageElements.map((el, index) => {
          const url = new URL(el.getAttribute("href")!, "https://jtjuslin.kapsi.fi/saved_human_frame/").toString();
          const filename = el.getAttribute("href")!;
          const match = filename.match(/(\d{4}-\d{2}-\d{2})_(\d{2}-\d{2}-\d{2})/); // Match date and time in the filename
          const date = match ? match[1] : "Unknown Date";
          const time = match ? match[2].replace(/-/g, ":") : "Unknown Time";

          return { id: index, url, date, time };
        });

        // Group images by date
        const groupedImages: Record<string, ImageData[]> = images.reduce((acc: Record<string, ImageData[]>, image) => {
          if (!acc[image.date]) {
            acc[image.date] = [];
          }
          acc[image.date].push(image);
          return acc;
        }, {} as Record<string, ImageData[]>);

        setImagesByDate(groupedImages);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="product-page">
      <h1> Home Monitor </h1>
      <p>Welcome</p>
      {error && <p className="error">{error}</p>}
      <div className="image-gallery">
        {Object.entries(imagesByDate).map(([date, images]) => (
          <div key={date} className="date-group">
            <h2>{date}</h2>
            {images.map((image) => (
              <div key={image.id} className="image-container">
                <img src={image.url} alt={`Image ${image.id}`} />
                <p className="timestamp">{image.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
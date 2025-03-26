import "./Picture.css";

type Props = {
  image: {
    url: string;
    id: number | string;
    time: string;
  };
};

export const Picture = ({ image }: Props) => (
  <div className="image-container">
    <img src={image.url} alt={`Image ${image.id}`} />
    <p className="timestamp">{image.time}</p>
  </div>
);

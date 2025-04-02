import { useState } from "react";
import "./Picture.css";

type Props = {
  image: {
    url: string;
    id: number | string;
    time: string;
  };
};

export const Picture = ({ image }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="image-container" onClick={openModal}>
        <img src={image.url} alt={`Image ${image.id}`} />
        <p className="timestamp">{image.time}</p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={image.url} alt={`Image ${image.id}`} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

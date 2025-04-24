import Image from "next/image";
import { ImageItem } from "./galleryContainer";

export interface GalleryFullData {
  title?: string;
  images: ImageItem[];
  fullDesc?: string;
}

export interface GalleryFullProps {
  data?: GalleryFullData;
  onClose: () => void;
}

const GalleryFull: React.FC<GalleryFullProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <article className="{{ isOpen ? 'block' : 'hidden' }} fixed z-50 bg-gray-700">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-width hover:text-gray-300"
      >
        Close
      </button>
      <h2>{data.title || ""}</h2>
      {data.images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt || ""}
          width={400}
          height={300}
        />
      ))}
      <p>{data.fullDesc || ""}</p>
    </article>
  );
};

export default GalleryFull;

import Image from "next/image";
import { ImageItem } from "./galleryContainer";

export interface GalleryFullData {
  title?: string;
  images: ImageItem[];
  fullDesc?: string;
}

export interface GalleryFullProps {
  data?: GalleryFullData;
  isOpen: boolean;
}

const GalleryFull: React.FC<GalleryFullProps> = ({ data, isOpen }) => {
  if (!data) return null;

  return (
    <article className="{{ isOpen ? 'block' : 'hidden' }} fixed z-50 justify-center bg-gray-700">
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

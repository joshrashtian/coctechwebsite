import Image, { StaticImageData } from "next/image";
//import { Dispatch, SetStateAction } from "react";
import { GalleryFullData } from "./galleryFull";

export interface ImageItem {
  src: string | StaticImageData;
  alt?: string;
}

interface GalleryContainerProps {
  title?: string;
  images: ImageItem[];
  shortDesc?: string;
  fullDesc?: string;
  onOpen: (data: GalleryFullData) => void;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ title, images, shortDesc, fullDesc, onOpen }) => {
  const handleClick = () => {
    onOpen({ title, images, fullDesc });
  }

  return (
    <button
      className="p-3 rounded-lg bg-gray-800 cursor-pointer"
      onClick={handleClick}
    >
      {title && (
        <header className="mb-3">
          <h2 className="text-lg">{title}</h2>
        </header>
      )}
      <figure className="aspect-square relative">
        <Image
          src={images[0].src}
          fill={true}
          sizes="(max-width: 591px) 85vw, (max-width: 856px) 40vw, (max-width: 1120px) 30vw, 264px"
          alt={images[0].alt || ""}
          className="rounded-lg"
        />
      </figure>
      {shortDesc && (
        <footer className="mt-3">
          <p className="text-sm">{shortDesc}</p>
        </footer>
      )}
    </button>
  );
}

export default GalleryContainer;

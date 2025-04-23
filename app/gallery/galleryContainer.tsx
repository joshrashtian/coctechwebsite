import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { GalleryFullData } from "./galleryFull"

export interface ImageItem {
  src: string | StaticImageData,
  alt?: string
}

interface GalleryContainerProps {
  title?: string;
  images: ImageItem[];
  shortDesc?: string;
  fullDesc?: string;
  setFullData: Dispatch<SetStateAction<GalleryFullData | undefined>>;
  setFullOpen: Dispatch<SetStateAction<boolean>>;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ title, images, shortDesc, fullDesc, setFullData, setFullOpen }) => {
  return (
    <button
      className="p-3 rounded-lg bg-gray-800 cursor-pointer"
      onClick={() => {
        setFullData({
          title: title,
          images: images,
          fullDesc: fullDesc
        });
        setFullOpen(true);
      }}
    >
        {title ?
        <header className="mb-3">
          <h2 className="text-lg">{title}</h2>
        </header>
      : null}
      <figure className="aspect-square relative select-none">
        <Image
          src={images[0].src}
          fill={true}
          sizes="(max-width: 591px) 85vw, (max-width: 856px) 40vw, (max-width: 1120px) 30vw, 264px"
          alt={images[0].alt || ""}
          className="rounded-lg"
        />
      </figure>
      {shortDesc ?
        <footer className="mt-3">
          <p className="text-sm">{shortDesc}</p>
        </footer>
      : null}
    </button>
  );
}

export default GalleryContainer;

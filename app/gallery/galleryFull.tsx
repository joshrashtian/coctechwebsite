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
    <div
      className="fixed z-50 w-4/5 max-w-233 h-4/5 max-h-175 p-7 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gray-800 rounded-xl"
    >
      <button
        onClick={onClose}
        className="absolute -top-5 -right-7 p-2 bg-gray-400"
      >
        Close
      </button>
      <article className="overflow-y-scroll max-h-full">
        {data.title && (
          <h2 className="sticky z-100 bg-gray-800 top-0 mb-2 pb-3 text-2xl text-center">
            {data.title}
          </h2>
        )}
        <figure className="mx-auto overflow-x-scroll overflow-y-hidden whitespace-nowrap h-125">
          <div className="relative inline-block w-1/6 -mr-3 h-full"></div>
          {data.images.map((image, index) => (
            <div key={index} className="relative inline-block w-2/3 mx-3 h-full">
              <Image
                src={image.src}
                alt={image.alt || ""}
                fill={true}
                className="object-contain"
              />
            </div>
          ))}
          <div className="relative inline-block w-1/6 -ml-3 h-full"></div>
        </figure>
        {data.fullDesc && (
          <p className="mt-5 text-wrap break-words">
            {data.fullDesc}
          </p>
        )}
      </article>
    </div>
  );
};

export default GalleryFull;

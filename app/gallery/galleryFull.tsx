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
        className="absolute -top-5 -right-7 p-2 bg-gray-400 rounded-full"
      >
        Close
      </button>
      <article className="flex flex-col h-full overflow-y-scroll overscroll-none">
        {data.title && (
          <h2 className="sticky z-100 bg-gray-800 top-0 mb-1 pb-4 text-2xl text-center">
            {data.title}
          </h2>
        )}
        <figure className="relative flex-1 min-h-48 overflow-x-scroll mx-auto flex flex-row gap-3">
          {data.images.map((image, index) => (
            <div key={index} className="relative shrink-0 h-full flex items-center">
              <Image
                src={image.src}
                alt={image.alt || ""}
                width={928} // max potential width
                height={860} // max potential height
                priority={index == 0}
                className="h-full w-auto object-contain rounded-lg"
              />
            </div>
          ))}
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

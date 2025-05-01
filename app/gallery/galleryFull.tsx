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
    <main className="fixed z-50 backdrop-blur-sm bg-zinc-600/90 w-full h-full top-0 left-0">
      <div className="fixed z-50 w-4/5 max-w-233 h-4/5 max-h-175 p-7 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-zinc-700 rounded-xl">
        <button
          onClick={onClose}
          className="absolute z-150 -top-6 -right-6 py-3 px-5 bg-zinc-300 text-zinc-800 text-2xl font-mono cursor-pointer rounded-full"
        >
          X
        </button>
        <article className="flex flex-col h-full overflow-y-scroll overscroll-none">
          {data.title && (
            <h2 className="sticky z-100 top-0 mb-1 pb-4 text-2xl font-bold font-mono text-center bg-zinc-700">
              {data.title}
            </h2>
          )}
          <figure className="relative flex-1 min-h-48 overflow-x-scroll mx-auto flex flex-row gap-3">
            {data.images.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 h-full flex items-center"
              >
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
            <p className="mt-5 text-wrap text-lg break-words">
              {data.fullDesc}
            </p>
          )}
        </article>
      </div>
    </main>
  );
};

export default GalleryFull;

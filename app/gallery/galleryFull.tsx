"use client";
import Image from "next/image";
import { ImageItem } from "./galleryContainer";
import { AnimatePresence, motion } from "motion/react";
import { IoClose } from "react-icons/io5";
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
  return (
    <AnimatePresence>
      {data && (
        <motion.main
          onClick={() => onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-50 backdrop-blur-sm bg-zinc-600/90 w-full h-full top-0 left-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="fixed z-50 w-4/5 max-w-233 h-4/5 max-h-175 p-7 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-zinc-100 rounded-xl"
          >
            <button
              onClick={onClose}
              className="absolute z-150 -top-6 -right-6 py-3 px-5 bg-zinc-300 hover:bg-red-400 hover:text-white duration-300 text-zinc-800 text-2xl font-mono cursor-pointer rounded-full"
            >
              <IoClose />
            </button>
            <article className="flex flex-col h-full overflow-y-scroll overscroll-none">
              {data.title && (
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.25, delay: 1 }}
                  className="sticky z-100 top-0 mb-1 pb-4 text-2xl font-bold font-mono text-left "
                >
                  {data.title}
                </motion.h2>
              )}
              <figure className="relative flex-1 min-h-48 snap-x snap-mandatory scroll-smooth overflow-x-scroll mx-auto flex flex-row gap-3">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative snap-center shrink-0 h-full flex items-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || ""}
                      width={928} // max potential width
                      height={860} // max potential height
                      priority={index == 0}
                      className="h-full w-full object-cover object-center rounded-lg"
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
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default GalleryFull;

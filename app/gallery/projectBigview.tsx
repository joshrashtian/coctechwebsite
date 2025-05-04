import Image from "next/image";
import { ImageItemData } from "./page";
import { AnimatePresence, motion } from "motion/react";
import { IoClose } from "react-icons/io5";
export interface ProjectBigviewData {
  title: string;
  images: ImageItemData[];
  bigDesc?: string;
}

export interface ProjectBigviewProps {
  data?: ProjectBigviewData;
  onClose: () => void;
}

const ProjectBigview: React.FC<ProjectBigviewProps> = ({ data, onClose }) => {
  return (
    <AnimatePresence>
      {data && (
        <>
          <motion.main
            onClick={() => onClose()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed z-200 backdrop-blur-sm bg-zinc-700/20 w-full h-full top-0 left-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-210 w-4/5 max-w-233 h-4/5 max-h-175 p-7 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-700 rounded-xl"
          >
            <button
              onClick={onClose}
              className="absolute z-220 -top-4 -right-4 p-4 bg-gray-300 dark:bg-gray-500 hover:bg-red-400 text-gray-800 dark:text-gray-200 hover:text-white duration-300 text-2xl font-mono cursor-pointer rounded-full"
            >
              <IoClose />
            </button>
            <article className="flex flex-col h-full overflow-y-auto overscroll-none">
              <h2 className="sticky z-100 top-0 mb-1 pb-4 text-2xl font-bold font-mono text-left">
                {data.title}
              </h2>
              <figure className="relative flex-1 min-h-48 snap-x snap-mandatory scroll-smooth overflow-x-auto mx-auto flex flex-row gap-3">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative snap-center shrink-0 h-full flex items-center"
                  >
                    <Image
                      className="h-full w-full object-cover object-center rounded-lg"
                      src={image.src}
                      alt={image.alt || ""}
                      width={928} // max potential width
                      height={860} // max potential height
                      priority={index == 0}
                      loading={index == 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </figure>
              {data.bigDesc && (
                <p className="mt-5 text-wrap text-lg break-words">
                  {data.bigDesc}
                </p>
              )}
            </article>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectBigview;

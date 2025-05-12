import ImageItem, { ImageItemData } from "./imageItem";
import { AnimatePresence, motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import { useRef, useEffect, useState, useCallback } from "react";

export interface ProjectModalData {
  title: string;
  images: ImageItemData[];
  fullDesc?: string;
}

export interface ProjectModalProps {
  data?: ProjectModalData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ data, onClose }) => {
  const figureRef = useRef<HTMLElement>(null);
  const [imageMargins, setImageMargins] = useState<{
    first: string;
    last: string;
  }>({ first: "0", last: "0"})

  const updateMargins = useCallback(() => {
    if (figureRef.current) {
      const firstImage = figureRef.current.firstElementChild as HTMLElement;
      const lastImage = figureRef.current.lastElementChild as HTMLElement;

      if (firstImage) {
        const firstWidth = firstImage.offsetWidth;
        setImageMargins(prev => ({
          ...prev,
          first: firstWidth ? `calc(50% - ${firstWidth}px / 2)` : "0"
        }));
      }

      if (lastImage) {
        const lastWidth = lastImage.offsetWidth;
        setImageMargins(prev => ({
          ...prev,
          last: lastWidth ? `calc(50% - ${lastWidth}px / 2)` : "0"
        }));
      }
    }
  }, [figureRef]);

  // Effect to update margins after images load and on resize
  useEffect(() => {
    if (!data) return;

    // Use MutationObserver to detect when images are loaded into the container
    const observer = new MutationObserver(() => {
      // Use requestAnimationFrame to ensure DOM is fully updated
      requestAnimationFrame(() => updateMargins());
    });

    if (figureRef.current) {
      observer.observe(figureRef.current, {
        childList: true
      });
    }

    // Initial calculation attempt (after first render)
    requestAnimationFrame(() => updateMargins());

    // Recalculate on window resize with debounce
    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateMargins, 100);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [data, updateMargins]);

  return (
    <AnimatePresence>
      {data && (
        <>
          <motion.main
            onClick={() => onClose()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed z-200 backdrop-blur-sm bg-zinc-700/20 w-full h-full top-0 left-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-210 w-9/10 sm:w-4/5 max-w-320 h-14/15 sm:h-4/5 max-h-150 sm:max-h-200 p-7 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-700 rounded-lg"
          >
            <button
              onClick={onClose}
              className="absolute z-220 top-0 right-0 w-16 hover:w-17 h-12 hover:h-13 bg-zinc-200 dark:bg-zinc-500 hover:bg-red-400 text-gray-800 dark:text-gray-200 hover:text-white duration-300 text-2xl font-mono cursor-pointer rounded-bl-lg rounded-tr-lg"
            >
              <IoClose className="m-auto"/>
            </button>
            <article className="flex flex-col h-full justify-between overflow-y-auto overscroll-none">
              <h2 className="sticky z-100 top-0 mb-4 pb-1 text-2xl font-bold font-mono text-left bg-zinc-100 dark:bg-zinc-700">
                {data.title}
              </h2>
              <div className="flex flex-col justify-center m-auto w-full sm:w-full h-17/20 p-4 bg-[var(--color-zinc-133)] dark:bg-[var(--color-zinc-733)] rounded-lg">
                <figure
                  ref={figureRef}
                  className="flex flex-row min-h-48 h-9/10 mb-3 gap-4 sm:gap-8 overflow-x-scroll snap-x snap-mandatory snap-always overscroll-none"
                  style={{
                    '--first-image-margin': imageMargins.first,
                    '--last-image-margin': imageMargins.last
                } as React.CSSProperties}
              >
                  {data.images.map((image, index) => (
                    <ImageItem
                      key={index}
                      imageData={{
                        src: image.src,
                        alt: image.alt
                      }}
                      linkProps={{
                        href: "",
                        scroll: false,
                        className: "relative max-w-4/5 h-full shrink-0 snap-center first:ml-[var(--first-image-margin)] last:mr-[var(--last-image-margin)]",
                      }}
                      imageProps={{
                        className: "w-full h-full object-cover object-center rounded-lg",
                        width: 500,
                        height: 500,
                        priority: (index == 0),
                        loading: "eager",
                        onLoad: updateMargins
                      }}
                    />
                  ))}
                </figure>
              </div>
              {data.fullDesc && (
                <p className="mt-5 text-wrap text-lg break-words">
                  {data.fullDesc}
                </p>
              )}
            </article>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

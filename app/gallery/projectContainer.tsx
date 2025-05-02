import Image, { StaticImageData } from "next/image";
import { ProjectBigviewData } from "./projectBigview";

export interface ImageItem {
  src: string | StaticImageData;
  alt?: string;
}

interface ProjectContainerProps {
  title?: string;
  images: ImageItem[];
  shortDesc?: string;
  fullDesc?: string;
  onOpen: (data: ProjectBigviewData) => void;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ title, images, shortDesc, fullDesc, onOpen }) => {
  const handleClick = () => {
    onOpen({ title, images, fullDesc });
  }

  return (
    <button
      onClick={handleClick}
      style={{ all: "unset" }}
    >
      <div className="p-3 rounded-lg bg-zinc-200/35 cursor-pointer in-focus-visible:outline-2 outline-sky-600">
        {title && (
          <h2 className="mb-3 text-lg font-mono font-semibold">{title}</h2>
        )}
        <figure className="aspect-square relative">
          <Image
            src={images[0].src}
            fill={true}
            sizes="(max-width: 608px) 85vw, (max-width: 887px) 42vw, (max-width: 1131px) 28vw, 321px"
            alt={images[0].alt || ""}
            className="rounded-lg object-cover"
          />
        </figure>
        {shortDesc && (
          <p className="mt-3 text-sm wrap-break-word">{shortDesc}</p>
        )}
      </div>
    </button>
  );
}

export default ProjectContainer;

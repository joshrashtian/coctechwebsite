import Image from "next/image";
import Link from "next/link";
import { ImageItemData } from "./imageItem";
import { ProjectBigviewData } from "./projectBigview";

export interface ProjectContainerProps {
  title: string;
  images: ImageItemData[];
  desc?: string;
  bigDesc?: string;
  onOpen: (data: ProjectBigviewData) => void;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ title, images, desc, bigDesc, onOpen }) => {
  const handleClick = () => {
    onOpen({ title, images, bigDesc });
  }

  return (
    <Link
      className="p-3 rounded-lg bg-zinc-300/25 cursor-pointer in-focus-visible:outline-2 outline-sky-600"
      href=""
      onClick={handleClick}
      scroll={false}
    >
      <h2 className="mb-3 text-lg font-mono font-semibold">{title}</h2>
      <figure className="aspect-square relative">
        <Image
          className="rounded-lg object-cover"
          src={images[0].src}
          alt={images[0].alt || ""}
          fill
          sizes="(max-width: 608px) 85vw, (max-width: 887px) 42vw, (max-width: 1131px) 28vw, 321px"
        />
      </figure>
      {desc && (
        <p className="mt-3 text-sm wrap-break-word">{desc}</p>
      )}
    </Link>
  );
}

export default ProjectContainer;

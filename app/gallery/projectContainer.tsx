import Image from "next/image";
import Link from "next/link";
import { ImageItemData } from "./imageItem";
import { ProjectModalData } from "./projectModal";
import { memo } from "react";

export interface ProjectContainerProps {
  title: string;
  images: ImageItemData[];
  desc?: string;
  fullDesc?: string;
}

const ProjectContainer: React.FC<ProjectContainerProps & { onOpen: (data: ProjectModalData) => void }> = ({ title, images, desc, fullDesc, onOpen }) => {
  const handleClick = () => {
    onOpen({ title, images, fullDesc });
  }

  return (
    <Link
      className="w-full p-3 rounded-md bg-zinc-300/25 cursor-pointer in-focus-visible:outline-2 outline-sky-600"
      href=""
      onClick={handleClick}
      scroll={false}
    >
      <h2 className="mb-3 text-lg font-mono font-semibold">{title}</h2>
      <figure className="h-65 sm:h-max sm:aspect-square relative">
        <Image
          className="rounded-lg object-cover"
          src={images[0].src}
          alt={images[0].alt || ""}
          fill
          sizes="(max-width: 640px) 86vw, (max-width: 884px) 42vw, (max-width: 1264px) 28vw, 362px"
        />
      </figure>
      {desc && (
        <p className="mt-3 text-sm wrap-break-word">{desc}</p>
      )}
    </Link>
  );
}

export default memo(ProjectContainer);

import Image, { StaticImageData } from "next/image";

interface GalleryContainerProps {
  name?: string,
  img?: string | StaticImageData,
  alt?: string,
  desc?: string
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ name, img, alt, desc }) => {
  return (
    <div className="p-3 rounded-lg bg-gray-800 cursor-pointer">
      {name ?
        <header className="mb-3">
          <h2 className="text-lg">{name}</h2>
        </header>
      : null}
      <figure className="aspect-square relative select-none">
        {img ?
          <Image
            src={img}
            fill={true}
            alt={alt ? alt : ""}
            className="rounded-lg"
           />
        : null}
      </figure>
      {desc ?
        <footer className="mt-3">
          <p className="text-sm">{desc}</p>
        </footer>
      : null}
    </div>
  );
}

export default GalleryContainer;

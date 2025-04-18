import Image, { StaticImageData } from "next/image";

interface GalleryContainerProps {
  name?: string,
  img?: string | StaticImageData,
  alt?: string,
  desc?: string
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ name, img, alt, desc }) => {
  return (
    <article className="w-full p-4 rounded-2xl outline-gray-500 outline-4">
      {name ?
        <header className="mb-2">
          <h3>{name}</h3>
        </header>
      : null}
      <figure className="aspect-square relative mb-2">
        {img ?
          <Image
            src={img}
            fill={true}
            alt={alt ? alt : ""}
            className="rounded-xl"
           />
        : null}
      </figure>
      {desc ?
        <footer>
          <p>{desc}</p>
        </footer>
      : null}
    </article>
  );
}

export default GalleryContainer;

import Link from "next/link";
import Image, { ImageProps, StaticImageData } from "next/image";

export interface ImageItemData {
  src: string | StaticImageData;
  alt?: string;
}

interface ImageItemProps {
  imageData: ImageItemData;
  imageProps: Omit<ImageProps, "src" | "alt">;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageData, imageProps }) => {
  return (
    <Link
      href=""
      scroll={false}
    >
      <Image
        src={imageData.src}
        alt={imageData.alt || ""}
        {...imageProps}
      />
    </Link>
  );
};

export default ImageItem;

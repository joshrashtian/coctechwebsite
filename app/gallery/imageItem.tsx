import Link from "next/link";
import Image, { ImageProps, StaticImageData } from "next/image";

export interface ImageItemData {
  src: string | StaticImageData;
  alt?: string;
}

interface ImageItemProps {
  className?: string | undefined;
  imageData: ImageItemData;
  imageProps: Omit<ImageProps, "src" | "alt">;
}

const ImageItem: React.FC<ImageItemProps> = ({ className, imageData, imageProps }) => {
  return (
    <Link
      href=""
      scroll={false}
      className={className}
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

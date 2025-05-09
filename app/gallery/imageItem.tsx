import Link, { LinkProps } from "next/link";
import Image, { ImageProps, StaticImageData } from "next/image";

export interface ImageItemData {
  src: string | StaticImageData;
  alt?: string;
}

interface ImageItemProps {
  imageData: ImageItemData;
  linkProps: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & React.RefAttributes<HTMLAnchorElement>;
  imageProps: Omit<ImageProps, "src" | "alt">;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageData, linkProps, imageProps }) => {
  return (
    <Link {...linkProps}>
      <Image
        src={imageData.src}
        alt={imageData.alt || ""}
        {...imageProps}
      />
    </Link>
  );
};

export default ImageItem;

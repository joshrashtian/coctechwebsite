import ImageItem, { ImageItemData } from "./imageItem";
import GallerySection from "./gallerySection";

interface PhotoSectionProps {
  images: ImageItemData[];
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ images }) => {
  return (
    <GallerySection title="Photos">
      <ul className="flex flex-row flex-wrap gap-3">
        {images.map((image, index) => (
          <li key={index} className="relative grow basis-auto h-80">
            <ImageItem
              imageData={{
                src: image.src,
                alt: image.alt || "",
              }}
              imageProps={{
                className: "object-cover h-full w-full rounded-sm",
                width: "1200",
                height: "500"
              }}
            />
          </li>
        ))}
      </ul>
    </GallerySection>
  );
}

export default PhotoSection;

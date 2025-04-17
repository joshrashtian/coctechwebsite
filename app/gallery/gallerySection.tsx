import GalleryContainer from "./galleryContainer";

interface GallerySectionProps {
  title: string;
  children: React.ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, children }) => {
  return (
    <div className="grid justify-items-center my-24">
      <h2 className="text-4xl my-6 font-semibold">{title}</h2>
      <div className="grid my-6 justify-items-center grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
}

export default GallerySection

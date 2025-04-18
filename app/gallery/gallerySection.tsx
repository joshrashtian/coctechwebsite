interface GallerySectionProps {
  title: string;
  children: React.ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, children }) => {
  return (
    <div className="grid justify-items-center my-24">
      <h2 className="text-4xl my-12 font-semibold">{title}</h2>
      <div className="grid w-296 justify-items-stretch grid-cols-3 m-6 gap-10">
        {children}
      </div>
    </div>
  );
}

export default GallerySection

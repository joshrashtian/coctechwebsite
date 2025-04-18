interface GallerySectionProps {
  title: string;
  children: React.ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, children }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-4xl text-center my-12 font-semibold">{title}</h2>
      <div className="grid w-full gap-4" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))"
      }}>
        {children}
      </div>
    </div>
  );
}

export default GallerySection

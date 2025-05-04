interface GallerySectionProps {
  title: string;
  children: React.ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, children }) => {
  return (
    <section className="max-w-300 my-28 mx-auto">
      <h2 className="text-4xl text-center my-10 font-bold font-mono">{title}</h2>
      {children}
    </section>
  );
};

export default GallerySection;

import { ReactNode, memo } from 'react';

interface GallerySectionProps {
  title: string;
  children: ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, children }) => {
  return (
    <section className="max-w-300 min-w-50 my-32 mx-auto">
      <h2 className="text-4xl text-center my-16 font-bold font-mono">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default memo(GallerySection);

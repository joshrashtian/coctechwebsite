import GallerySection from "./gallerySection";
import GalleryContainer from "./galleryContainer";

export default function Gallery() {
  return (
    <>
      <div className="mx-10 my-24">
        <GallerySection
          title={"Our Projects"}
        >
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
        </GallerySection>
        <GallerySection
          title={"Photos"}
        >
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
        </GallerySection>
      </div>
    </>
  );
}

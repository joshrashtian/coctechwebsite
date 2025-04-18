import GallerySection from "./gallerySection";
import GalleryContainer from "./galleryContainer";

export default function Gallery() {
  return (
    <>
      <div className="mx-10 my-24">
        <GallerySection
          title={"Our Projects"}
        >
          <GalleryContainer
            name="Epic Awesome Project 1"
            img="https://picsum.photos/seed/picsum/100"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 2"
            img="https://picsum.photos/seed/picsum/200"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 3"
            img="https://picsum.photos/seed/picsum/300"
            desc="Awesome Description fopr an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 4"
            img="https://picsum.photos/seed/picsum/400"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 5"
            img="https://picsum.photos/seed/picsum/500"
            desc="Awesome Description for an Epic Awesome Project"
          />
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

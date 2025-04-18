import GallerySection from "./gallerySection";
import GalleryContainer from "./galleryContainer";

export default function Gallery() {
  return (
    <>
      <div className="my-24 mx-10">
        <GallerySection
          title={"Projects"}
        >
          <GalleryContainer
            name="Epic Awesome Project 1"
            img="https://picsum.photos/seed/uepir6vmyw/500"
            alt="this is the alt text"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 2"
            img="https://picsum.photos/seed/662xih81flv/300/200"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 3"
            img="https://picsum.photos/seed/8897yw9jmlm/300/400"
            desc="Awesome"
          />
          <GalleryContainer
            name="Epic Awesome Project 4"
            img="https://picsum.photos/seed/vt4u55o62rh/400"
            desc="Awesome Description for an Epic Awesome Project"
          />
          <GalleryContainer
            name="Epic Awesome Project 5"
            img="https://picsum.photos/seed/m63ugcdomu/500"
            desc="Awesome Description for an Epic Awesome Project"
          />
        </GallerySection>
        <GallerySection
          title={"Photos"}
        >
          <GalleryContainer
            img="https://picsum.photos/seed/0v6qgxqjrwb/450"
          />
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

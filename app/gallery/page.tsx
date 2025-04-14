import GalleryContainer from "./galleryContainer";

export default function Gallery() {
  return (
    <>
      <div className="grid justify-items-center m-24">
        <h2 className="text-3xl font-semibold">Our Projects</h2>
        <div className="grid justify-items-center grid-cols-3 m-12 gap-10">
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
          <GalleryContainer />
        </div>
      </div>
    </>
  );
}

import GalleryBox from "./galleryBox";

export default function Gallery() {
  return (
    <>
      <div className="grid justify-items-center m-24">
        <h2 className="text-3xl font-semibold">Our Projects</h2>
        <div className="grid grid-cols-3 m-12">
          <GalleryBox />
          <GalleryBox />
          <GalleryBox />
          <GalleryBox />
          <GalleryBox />
        </div>
      </div>
    </>
  );
}

'use client';

import { useState } from "react";
import GallerySection from "./gallerySection";
import GalleryContainer from "./galleryContainer";
import GalleryFull, { GalleryFullData } from "./galleryFull";

import photo1 from "@/public/gallery/about-us-1.jpg";
import photo2 from "@/public/gallery/who-are-we-game-1.png";

export default function Gallery() {
  const [fullData, setFullData] = useState<GalleryFullData | undefined>(undefined);

  const fullOpen = (data: GalleryFullData) => {
    setFullData(data);
  }

  const fullClose = () => {
    setFullData(undefined);
  }

  return (
    <>
      <GalleryFull
        data={fullData}
        onClose={fullClose}
      />
      <div className="my-24 mx-10">
        <GallerySection
          title={"Projects"}
        >
          <GalleryContainer
            title="Epic Awesome Project 1"
            images={[
              {
                src: photo1,
                alt: "OwO whats twis?",
              },
              {
                src: photo2,
                alt: "lol",
              },
              {
                src: "https://picsum.photos/seed/uepir6vmyw/500",
                alt: "Awesome sauce 1"
              },
              {
                src: "https://picsum.photos/seed/testing123/1000/500",
                alt: "this is a test"
              },
              {
                src: "https://picsum.photos/seed/anotherone/500",
                alt: "another one"
              }
            ]}
            shortDesc="Awesome Short Description"
            fullDesc="What a nice set of photos! :D"
            onOpen={fullOpen}
          />
          <GalleryContainer
            title="Epic Awesome Project 2"
            images={[
              {
                src: "https://picsum.photos/seed/662xih81flv/300/200",
                alt: "Awesome sauce 2"
              }
            ]}
            shortDesc="Awesome Short Description"
            fullDesc="A full thoughtful description detailing the contents of said project in a informative and clear manner aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            onOpen={fullOpen}
          />
          <GalleryContainer
            title="Epic Awesome Project 3"
            images={[
              {
                src: "https://picsum.photos/seed/8897yw9jmlm/300/400",
                alt: "Awesome sauce 3"
              }
            ]}
            shortDesc="AAAAAAAAAAWWWWWWWWWEEEEEEESSSSSSSSSSOOOOOOOOOMMMMMMMMMMEEEEEEEEEEEEEEE!!!!!!!!!!!!!"
            fullDesc="A full thoughtful description detailing the contents of said project in a informative and clear manner"
            onOpen={fullOpen}
          />
          <GalleryContainer
            title="Epic Awesome Project 4"
            images={[
              {
                src: "https://picsum.photos/seed/vt4u55o62rh/400"
              }
            ]}
            shortDesc="Awesome Short Description"
            onOpen={fullOpen}
          />
          <GalleryContainer
            title="Epic Awesome Project 5"
            images={[
              {
                src: "https://picsum.photos/seed/m63ugcdomu/500"
              }
            ]}
            shortDesc="Awesome Short Description"
            onOpen={fullOpen}
          />
        </GallerySection>
        <GallerySection
          title={"Photos"}
        >
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/0v6qgxqjrwb/450",
                alt: "testing 456"
              }
            ]}
            onOpen={fullOpen}
          />
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/09kcm6qnqkot/550"
              }
            ]}
            shortDesc="Interesting photo!"
            onOpen={fullOpen}
          />
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/c8puk3czjud/650"
              }
            ]}
            onOpen={fullOpen}
          />
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/2n3s8fgcn4d/750"
              }
            ]}
            onOpen={fullOpen}
          />
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/7ikzbto5y2w/750"
              }
            ]}
            onOpen={fullOpen}
          />
          <GalleryContainer
            images={[
              {
                src: "https://picsum.photos/seed/a9e8ju4th9/750"
              }
            ]}
            shortDesc="Interesting Photo!"
            onOpen={fullOpen}
          />
        </GallerySection>
      </div>
    </>
  );
}

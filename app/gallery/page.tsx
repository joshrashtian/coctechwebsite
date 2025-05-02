"use client";

import { useState } from "react";
import { DM_Sans } from "next/font/google";
import ProjectContainer from "./projectContainer";
import ProjectBigview, { ProjectBigviewData } from "./projectBigview";

import game_volley_1 from "@/public/gallery/gamedev-volleyball-1.png";
import game_volley_2 from "@/public/gallery/gamedev-volleyball-2.png";
import game_snake from "@/public/gallery/gamedev-pysnake.png";
import web_2024_site_1 from "@/public/gallery/webdev-2024-site-1.png";
import web_2024_site_2 from "@/public/gallery/webdev-2024-site-2.png";
import web_2024_site_3 from "@/public/gallery/webdev-2024-site-3.png";
// import star_s24_1 from "@/public/gallery/star-party-spring-2024-1.jpg";
// import star_s24_2 from "@/public/gallery/star-party-spring-2024-2.jpg";
// import star_s24_3 from "@/public/gallery/star-party-spring-2024-3.jpg";
// import star_s24_4 from "@/public/gallery/star-party-spring-2024-4.jpg";
// import cougar_24 from "@/public/gallery/cougar-fest-2024.jpg";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Gallery() {
  const [bigData, setBigData] = useState<ProjectBigviewData | undefined>(
    undefined
  );

  const bigOpen = (data: ProjectBigviewData) => {
    setBigData(data);
  };

  const bigClose = () => {
    setBigData(undefined);
  };

  return (
    <div className={`${font.className}`}>
      <ProjectBigview data={bigData} onClose={bigClose} />
      <div className="mt-52 mb-39 mx-8">
        <section className="max-w-[1068px] my-28 mx-auto">
          <h2 className="text-4xl text-center my-10 font-bold font-mono">Projects</h2>
          <div className="grid w-full gap-5" style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(264px, 1fr))"
          }}>
            <ProjectContainer
              title="Sand Simulation"
              images={[
                {
                  src: "https://picsum.photos/200",
                  alt: "Sand.",
                },
              ]}
              shortDesc="Game Dev's 2024 Sand Simulation!"
              fullDesc="Sand game."
              onOpen={bigOpen}
            />
            <ProjectContainer
              title="PySnake"
              images={[
                {
                  src: game_snake,
                  alt: "A snake game showing the snake with a score of 0 aiming to capture its first fruit.",
                },
              ]}
              shortDesc="Game Dev's 2024 PySnake project!"
              fullDesc="COC Tech Club Game Dev's 2024 snake game programmed in pure Python! Control the snake with the arrow keys to capture fruits increasing your score. If you hit the walls you lose! What's your high score?"
              onOpen={bigOpen}
            />
            <ProjectContainer
              title="First TechClub Website"
              images={[
                {
                  src: web_2024_site_1,
                  alt: 'The home page of the Web Dev\'s original club website with text in the middle showing "Welcome to COC Tech Club!" below a header showing the website title and a list of subpages to navigate to.',
                },
                {
                  src: web_2024_site_2,
                  alt: 'Further down the home page of the original club website showcasing the about section of the website introducing members to the club. The text reads "We are a club for students who are interested in Computer Science, Software Engineering, and the tech industry. Our goal is to increase involvement in these fields outside of the academic courses offered at College of the Canyons"',
                },
                {
                  src: web_2024_site_3,
                  alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event.",
                },
              ]}
              shortDesc="Web Dev's first website!"
              fullDesc="The COC Tech Club Web Dev team's first website made in 2024! A home website for the COC Tech Club made entirely in React utilizing Google Firebase as a backend to dynamically load Projects and Events and handle Join submissions."
              onOpen={bigOpen}
            />
            <ProjectContainer
              title="TechClub Volleyball"
              images={[
                {
                  src: game_volley_1,
                  alt: "A volleyball game showing two players battling each other. The player on the left with the volleyball aims to get around the other player's defense.",
                },
                {
                  src: game_volley_2,
                  alt: "A volleyball game showing two players battling each other. The player on the left with the volleyball aims to get around the other player's defense.",
                },
              ]}
              shortDesc="Game Dev's 2024 Volleyball project!"
              fullDesc="COC Tech Club Game Dev presents their 2024 volleyball game! Programmed with Unity with C#, two players can duke it out on a sandy volleyball field battling to score the most points."
              onOpen={bigOpen}
            />
          </div>
        </section>
        <section className="max-w-[1200px] my-28 mx-auto">
          <h2>Photos</h2>
        </section>
      </div>
    </div>
  );
}

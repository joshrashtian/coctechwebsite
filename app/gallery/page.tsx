"use client";

import { DM_Sans } from "next/font/google";
import ProjectSection from "./projectSection";
import PhotoSection from "./photoSection";

import game_volley_1 from "@/public/gallery/gamedev-volleyball-1.png";
import game_volley_2 from "@/public/gallery/gamedev-volleyball-2.png";
import game_snake from "@/public/gallery/gamedev-pysnake.png";
import web_2024_site_1 from "@/public/gallery/webdev-2024-site-1.png";
import web_2024_site_2 from "@/public/gallery/webdev-2024-site-2.png";
import web_2024_site_3 from "@/public/gallery/webdev-2024-site-3.png";
import star_s24_1 from "@/public/gallery/star-party-spring-2024-1.jpg";
import star_s24_2 from "@/public/gallery/star-party-spring-2024-2.jpg";
import star_s24_3 from "@/public/gallery/star-party-spring-2024-3.jpg";
import star_s24_4 from "@/public/gallery/star-party-spring-2024-4.jpg";
import cougar_24 from "@/public/gallery/cougar-fest-2024.jpg";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Gallery() {
  return (
    <div className={`${font.className} mt-52 mb39 mx-8`}>
      <ProjectSection
        projects={[
          {
            title: "Sand Simulation",
            images: [
              {
                src: "https://picsum.photos/500",
                alt: "Sand."
              }
            ],
            desc: "Game Dev's 2024 Sand Simulation!",
            fullDesc: "Sand game. What a full description."
          },
          {
            title: "PySnake",
            images: [
              {
                src: game_snake,
                alt: "A snake game showing the snake with a score of 0 aiming to capture its first fruit."
              },
            ],
            desc: "Game Dev's 2024 PySnake project!",
            fullDesc: "COC Tech Club Game Dev's 2024 snake game programmed in pure Python! Control the snake with the arrow keys to capture fruits increasing your score. If you hit the walls you lose! What's your high score?"
          },
          {
            title: "First TechClub Website",
            images: [
              {
                src: web_2024_site_1,
                alt: 'The home page of the Web Dev\'s original club website with text in the middle showing "Welcome to COC Tech Club!" below a header showing the website title and a list of subpages to navigate to.'
              },
              {
                src: web_2024_site_2,
                alt: 'Further down the home page of the original club website showcasing the about section of the website introducing members to the club. The text reads "We are a club for students who are interested in Computer Science, Software Engineering, and the tech industry. Our goal is to increase involvement in these fields outside of the academic courses offered at College of the Canyons"'
              },
              {
                src: web_2024_site_3,
                alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
              }
            ],
            desc: "Game Dev's 2024 PySnake project!",
            fullDesc: "The COC Tech Club Web Dev team's first website made in 2024! A home website for the COC Tech Club made entirely in React utilizing Google Firebase as a backend to dynamically load Projects and Events and handle Join submissions."
          },
          {
            title: "TechClub Volleyball",
            images: [
              {
                src: game_volley_1,
                alt: "A volleyball game showing two players battling each other. The player on the left with the volleyball aims to get around the other player's defense."
              },
              {
                src: game_volley_2,
                alt: "A volleyball game showing two players battling each other. The player on the left with the volleyball aims to get around the other player's defense."
              }
            ],
            desc: "Game Dev's 2024 Volleyball project!",
            fullDesc: "COC Tech Club Game Dev presents their 2024 volleyball game! Programmed with Unity with C#, two players can duke it out on a sandy volleyball field battling to score the most points."
          }
        ]}
      />
      <PhotoSection
        images={[
          {
            src: "https://picsum.photos/800",
            alt: "Placeholder image"
          },
          {
            src: "https://picsum.photos/300/900",
            alt: "Placeholder image"
          },
          {
            src: "https://picsum.photos/800/600",
            alt: "Placeholder image"
          },
          {
            src: "https://picsum.photos/900/300",
            alt: "Placeholder image"
          },
          {
            src: star_s24_1,
            alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
          },
          {
            src: star_s24_2,
            alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
          },
          {
            src: star_s24_3,
            alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
          },
          {
            src: star_s24_4,
            alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
          },
          {
            src: cougar_24,
            alt: "An image of the website's events page showcasing the date, time and location of a Club Meeting, the 2024 Spring Star Party, and a Bowling Event."
          }
        ]}
      />
    </div>
  );
}

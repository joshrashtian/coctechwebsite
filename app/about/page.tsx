import React from "react";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AboutPage = () => {
  return (
    <div
      className={`${font.className} flex flex-col min-h-screen p-8 pb-20 gap-5 sm:p-20`}
    >
      <section className="flex flex-col h-screen items-start justify-center gap-5">
        <h1 className="text-4xl font-bold font-mono">About Us</h1>
        <p className="text-2xl">
          The College of the Canyons&apos; Tech Club is a group of students who
          are passionate about technology. Founded in 2023 by a group of COC
          students, the end goal for the club is to provide a place for coders,
          programmers, artists, gamers, to all come together and form a
          community.
        </p>
        <p className="text-2xl font-bold">
          The club is open to all students at College of the Canyons, and is
          open to all majors.
        </p>
      </section>
      <section className="flex flex-col h-screen items-start justify-center gap-5">
        <h1 className="text-4xl font-bold font-mono">Our Mission</h1>
        <p className="text-2xl">
          The mission of the club is to provide a place for coders, programmers,
          artists, gamers, to all come together and form a community.
        </p>
        <ol className=" list-inside list-disc gap-1 flex flex-col text-2xl">
          <li className=" p-2 px-4 font-mono bg-zinc-200/30 rounded-md text-2xl">
            Work on projects together to help build your resume and skillset.
          </li>
          <li className=" p-2 px-4 font-mono bg-zinc-200/30 rounded-md text-2xl">
            Guest speakers from the industry to help students learn about the
            latest trends in technology.
          </li>
          <li className=" p-2 px-4 font-mono bg-zinc-200/30 rounded-md text-2xl">
            A showcase for students to show off their projects and skills.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default AboutPage;

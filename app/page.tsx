import { MdGamepad, MdWeb } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold font-mono">
        College of the Canyons&apos; Tech Club
      </h1>
      <p className="text-2xl">
        Where Developers at College of the Canyons all come together.
      </p>
      <div className="flex items-center justify-center gap-4">
        <section className="text-6xl bg-zinc-200/50 flex-col flex items-center justify-center gap-4 backdrop-blur-sm rounded-lg p-4">
          <MdGamepad />
          <p className="text-2xl">Game Development</p>
        </section>
        <section className="text-6xl bg-zinc-200/50 flex-col flex items-center justify-center gap-4 backdrop-blur-sm rounded-lg p-4">
          <MdWeb />
          <p className="text-2xl">Web Development</p>
        </section>
      </div>
    </div>
  );
}

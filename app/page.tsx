import { Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container ">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p className="text-base text-gray-500">
            Explore the car you might like
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}

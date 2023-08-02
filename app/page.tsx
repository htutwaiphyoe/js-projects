import { fetchCars } from "@/api";
import { Hero, SearchBar } from "@/components";

export default async function Home() {
  const cars = await fetchCars();

  const isEmptyCars = !Array.isArray(cars) || cars.length < 1 || !cars;

  console.log(cars);

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

        {isEmptyCars ? (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, No Result.</h2>
            <p>{cars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <CarCard car={car} key={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

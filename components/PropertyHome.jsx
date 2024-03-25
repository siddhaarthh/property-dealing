import PropertyCard from "./PropertyCard";
import { getPropertyHandler } from "@/utils/propertyHandler";

async function PropertyHome() {
  const property = await getPropertyHandler();

  const shuffledProperty = property.sort(() => Math.random() - 0.5);
  const slicedProperty = shuffledProperty.slice(0, 6);

  return (
    <section className="w-full bg-gray-100 py-10 pb-20 md:px-5 lg:px-[10rem]">
      <div className="mb-5 flex w-full items-center justify-between px-3 text-center">
        <h3
          className=" mb-5 w-full font-playfair
         text-2xl font-[700] sm:text-[30px] md:text-[35px] xl:text-[40px]"
        >
          Explore our recent properties
        </h3>
      </div>

      <div className="grid-col-1 grid gap-10 px-5 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
        {slicedProperty.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PropertyHome;

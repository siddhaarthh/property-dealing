import PropertyEditForm from "@/components/PropertyEditForm";
import React from "react";

function PropertyEditPage() {
  return (
    <section className="mx-auto w-full px-5 lg:w-[80%] lg:px-0">
      <div className="w-full">
        <h3 className="mb-4 mt-6 font-playfair  text-3xl font-bold">
          Edit property
        </h3>

        <PropertyEditForm />
      </div>
    </section>
  );
}

export default PropertyEditPage;

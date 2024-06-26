"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { createProperty } from "@/utils/propertyHandler";
import { changeTo64 } from "@/utils/helperFunction";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AddProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const User = session?.user;

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const propertyImage = data.propertyImages;
    const floorPlanImage = data.floorPlanImages;

    const propertyImage64 = await changeTo64(propertyImage);
    const floorImage64 = await changeTo64(floorPlanImage);

    // Prepare property data
    const propertyData = {
      name: data.propertyName,
      propertyImages: [...propertyImage64],
      price: Number(data.price),
      description: data.description,
      amenities: [...data.features],
      details: {
        builtUpArea: `${data.builtUpArea} sqft`,
        dimensions: `${data.dimensions} ft`,
        builtYear: data.buildYear,
        parking: data.parking,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        balcony: data.balcony,
        propertyCategory: data.propertyCategory,
        carpetArea: `${data.carpetArea} sqft`,
        status: data.status,
      },
      floorPlanImages: [...floorImage64],
      location: {
        street: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      },

      user: {
        id: User.id,
        name: User.username,
        email: User.email,
      },

      creatorId: User.id,
    };

    try {
      // Call createProperty function to add new property
      setIsLoading(true);
      const res = await createProperty(propertyData);

      setIsLoading(false);
      router.push(`${res.url}`);
    } catch (error) {
      // Handle any errors that occur during property creation
      console.error("Error creating property:", error);
      toast("Failed to add property. Please try again later.");
    }
  };

  return (
    <section className="mx-auto w-full px-5 lg:w-[80%] lg:px-0">
      <div className="w-full">
        <h3 className="mb-4 mt-6 font-playfair text-3xl  font-bold md:mb-10">
          Add new property
        </h3>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 grid gap-y-5 lg:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="propertyName">
                Property Name :
              </label>
              <input
                type="text"
                id="propertyName"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Property Name"
                {...register("propertyName", { required: true, maxLength: 80 })}
              />
              {errors.propertyName && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="price">
                Price :
              </label>
              <input
                type="number"
                id="price"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                Street :
              </label>
              <input
                type="text"
                id="street"
                name="street"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Street name"
                {...register("street", { required: true })}
              />
              {errors.street && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                City :
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter City"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                State :
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter State"
                {...register("state", { required: true })}
              />
              {errors.state && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                Zipcode :
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Zipcode"
                {...register("zipCode", { required: true })}
              />
              {errors.zipCode && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="builtUpArea">
                Built Up Area (sqft) :
              </label>
              <input
                type="number"
                id="builtUpArea"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter BuiltUp Area"
                {...register("builtUpArea", { required: true })}
              />
              {errors.builtUpArea && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="carpetArea">
                Carpet Area (sqft) :
              </label>
              <input
                type="number"
                id="carpetArea"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Carpet Area"
                {...register("carpetArea", { required: true })}
              />
              {errors.carpetArea && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="buildYear">
                Build Year :
              </label>
              <input
                type="number"
                id="buildYear"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Build Year"
                {...register("buildYear", { required: true })}
              />
              {errors.buildYear && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="dimensions">
                Dimensions (ft) :
              </label>
              <input
                type="text"
                id="dimensions"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Dimensions"
                {...register("dimensions", { required: true })}
              />
              {errors.dimensions && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="bedrooms">
                Bedrooms :
              </label>
              <input
                type="number"
                id="bedrooms"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Bedroom Number"
                {...register("bedrooms", { required: true })}
              />
              {errors.bedrooms && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="bathrooms">
                Bathrooms :
              </label>
              <input
                type="number"
                id="bathrooms"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Bathroom Number"
                {...register("bathrooms", { required: true })}
              />
              {errors.bathrooms && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* balcony */}
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="balcony">
                Balcony :
              </label>
              <input
                type="number"
                id="balcony"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Balcony Number"
                {...register("balcony", { required: true })}
              />
              {errors.balcony && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* parking */}

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="parking">
                Parking :
              </label>

              <select
                name="parking"
                id="parking"
                defaultValue={"garage"}
                className="h-[50px] appearance-none rounded-lg border border-[#A4A6AC33] px-3 lg:w-1/2"
                {...register("parking", { required: true })}
              >
                <option value="Select Parking Category" disabled>
                  Select Parking Category
                </option>
                <option value="garage">Garage</option>
                <option value="driveway">Driveway</option>
                <option value="street Parking">Street Parking</option>
                <option value="carport">Carport</option>
                <option value="no parking">No parking</option>
              </select>

              {errors.parking && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* property category */}
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="propertyCategory">
                Property Category :
              </label>

              <select
                name="propertyCategory"
                id="propertyCategory"
                defaultValue={"apartment"}
                className="h-[50px] appearance-none rounded-lg border border-[#A4A6AC33] px-3 lg:w-1/2"
                {...register("propertyCategory", { required: true })}
              >
                <option value="Select Property Category" disabled>
                  Select Property Category
                </option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
              </select>

              {errors.propertyCategory && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* status */}
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="status">
                Status :
              </label>

              <select
                name="status"
                id="status"
                defaultValue={"available"}
                className="h-[50px] appearance-none rounded-lg border border-[#A4A6AC33] px-3 lg:w-1/2"
                {...register("status", { required: true })}
              >
                <option value="Select Property Category" disabled>
                  Select Status Category
                </option>
                <option value="available">Available</option>
                <option value="under contract">Under contract</option>
                <option value="immediate move-in">Immediate Move-In</option>
                <option value="Villa">Villa</option>
                <option value="off market">Off Market</option>
              </select>
            </div>
            {errors.status && (
              <span className="mt-2 text-red-500">This field is required</span>
            )}
          </div>

          {/* amenities */}

          <p className="mb-2 font-bold">Amenities:</p>
          <div className="mb-5 grid gap-y-3 lg:grid-cols-3">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="airConditioning"
                className="h-5 w-5"
                value="Air Conditioning"
                {...register("features")}
              />
              <label htmlFor="airConditioning">Air Conditioning</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="heatingSystem"
                className="h-5 w-5"
                value="Heating System"
                {...register("features")}
              />
              <label htmlFor="heatingSystem">Heating System</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="furnished"
                className="h-5 w-5"
                value="Furnished"
                {...register("features")}
              />
              <label htmlFor="furnished">Furnished</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="garden"
                className="h-5 w-5"
                value="Garden"
                {...register("features")}
              />
              <label htmlFor="garden">Garden</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="securitySystem"
                className="h-5 w-5"
                value="Security System"
                {...register("features")}
              />
              <label htmlFor="securitySystem">Security System</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="wifi"
                className="h-5 w-5"
                value="Wifi"
                {...register("features")}
              />
              <label htmlFor="wifi">Wifi</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="swimmingPool"
                className="h-5 w-5"
                value="Swimming Pool"
                {...register("features")}
              />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="gym"
                className="h-5 w-5"
                value="Gym"
                {...register("features")}
              />
              <label htmlFor="gym">Gym</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="water"
                className="h-5 w-5"
                value="24 Hours Water"
                {...register("features")}
              />
              <label htmlFor="water">24 Hours Water</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="lift"
                className="h-5 w-5"
                value="Private Lift"
                {...register("features")}
              />
              <label htmlFor="lift">Private Lift</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="indoor"
                className="h-5 w-5"
                value="Indoor Games"
                {...register("features")}
              />
              <label htmlFor="indoor">Indoor Games</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="petFriendly"
                className="h-5 w-5"
                value="Pet-Friendly"
                {...register("features")}
              />
              <label htmlFor="petFriendly">Pet-Friendly</label>
            </div>
          </div>
          {/* description */}
          <div className="mb-5 flex flex-col">
            <label className="mb-2 font-bold" htmlFor="description">
              Description :
            </label>
            <textarea
              id="description"
              className="h-[200px] w-full  rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Write big description about property"
              {...register("description", { required: true, maxLength: 500 })}
            />
            {errors.description && (
              <span className="mt-2 text-red-500">This field is required</span>
            )}
          </div>

          {/* images */}

          <div className="mb-5 grid gap-y-5 lg:grid-cols-2">
            <div className="mb-5 flex flex-col lg:w-1/2">
              <label className="mb-2 font-bold" htmlFor="propertyImages">
                Images :
              </label>
              <input
                type="file"
                id="propertyImages"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
                multiple
                accept="image/*"
                {...register("propertyImages", { required: true })}
              />
              {errors.propertyImages && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* floor plan images */}

            <div className="mb-5 flex flex-col lg:w-1/2">
              <label className="mb-2 font-bold" htmlFor="floorPlanImages">
                Floor Plan Images :
              </label>
              <input
                type="file"
                id="floorPlanImages"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
                multiple
                accept="image/*"
                {...register("floorPlanImages", { required: true })}
              />
              {errors.floorPlanImages && (
                <span className="mt-2 text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <button
            className={`mx-auto mb-5 flex h-[50px] w-1/2 items-center justify-center rounded-xl ${!isLoading ? "bg-primary-500" : "bg-gray-500"}  text-white`}
          >
            {isLoading ? "Adding Please Wait.." : "Add Property"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProperty;

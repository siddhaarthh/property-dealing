"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { createProperty } from "@/utils/propertyHandler";
import { changeTo64 } from "@/utils/helperFunction";

function AddProperty() {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();

  const User = session?.user;
  const onSubmit = async (data, e) => {
    e.preventDefault();

    const propertyImage = data.propertyImages;
    const floorPlanImage = data.floorPlanImages;

    const propertyImage64 = await changeTo64(propertyImage);
    const floorImage64 = await changeTo64(floorPlanImage);

    // data for property model
    const propertyData = {
      name: data.propertyName,
      propertyImages: [...propertyImage64],
      address: data.address,
      price: Number(data.price),
      description: data.description,
      features: data.features.join(", "),
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
      location: data.location,

      owner: {
        name: data.ownerName,
        contact: Number(data.ownerContact),
        email: data.ownerEmail,
        address: data.ownerAddress,
      },

      user: {
        id: User.id,
        image: User.image,
      },
    };

    createProperty(propertyData);
  };

  return (
    <section className="mx-auto w-full px-5 lg:w-[80%] lg:px-0">
      <div className="w-full">
        <h3 className="mb-4 mt-6 font-playfair  text-3xl font-bold">
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
                {...register("propertyName", { required: true })}
              />
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
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="address">
                Address :
              </label>
              <input
                type="text"
                id="address"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                Location :
              </label>
              <input
                type="text"
                id="location"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Location"
                {...register("location", { required: true })}
              />
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
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="dimensions">
                Dimensions (ft) :
              </label>
              <input
                type="number"
                id="dimensions"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Dimensions"
                {...register("dimensions", { required: true })}
              />
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
                value="Garden or Outdoor Space"
                {...register("features")}
              />
              <label htmlFor="garden">Garden or Outdoor Space</label>
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
                id="highSpeedInternet"
                className="h-5 w-5"
                value="High-Speed Internet Access"
                {...register("features")}
              />
              <label htmlFor="highSpeedInternet">
                High-Speed Internet Access
              </label>
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
                value="Gym or Fitness Facilities"
                {...register("features")}
              />
              <label htmlFor="gym">Gym or Fitness Facilities</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="balconyFeatures"
                className="h-5 w-5"
                value="Balcony or Terrace"
                {...register("features")}
              />
              <label htmlFor="balconyFeatures">Balcony or Terrace</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="elevator"
                className="h-5 w-5"
                value="Elevator"
                {...register("features")}
              />
              <label htmlFor="elevator">Elevator</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="laundry"
                className="h-5 w-5"
                value="Laundry Facilities"
                {...register("features")}
              />
              <label htmlFor="laundry">Laundry Facilities</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="petFriendly"
                className="h-5 w-5"
                value="Pet-Friendly Features"
                {...register("features")}
              />
              <label htmlFor="petFriendly">Pet-Friendly Features</label>
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
              {...register("description", { required: true })}
            />
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
            </div>

            {/* owner */}

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="ownerName">
                Owner Name :
              </label>
              <input
                type="text"
                id="ownerName"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Property Name"
                {...register("ownerName", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="ownerContact">
                Owner Contact Number:
              </label>
              <input
                type="number"
                id="ownerContact"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Price"
                {...register("ownerContact", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="ownerEmail">
                Owner Email :
              </label>
              <input
                type="email"
                id="ownerEmail"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Location"
                {...register("ownerEmail", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="ownerAddress">
                Address :
              </label>
              <input
                type="text"
                id="ownerAddress"
                className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
                placeholder="Enter Address"
                {...register("ownerAddress", { required: true })}
              />
            </div>
          </div>

          <button className="mx-auto mb-5 flex h-[50px] w-1/2 items-center justify-center rounded-xl bg-primary-500 text-white">
            Add Property
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProperty;

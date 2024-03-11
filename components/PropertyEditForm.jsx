"use client";

import { getSingleProperty, updateProperty } from "@/utils/propertyHandler";
import { set } from "mongoose";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function PropertyEditForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      propertyName: property?.name,
    },
  });

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const propertyData = await getSingleProperty(id);
        if (!propertyData) {
          throw new Error("Property not found");
        }
        setProperty(propertyData);

        // Set default values for form fields
        setValue("propertyName", propertyData.name);
        setValue("price", propertyData.price);
        setValue("address", propertyData.address);
        setValue("location", propertyData.location);
        setValue("builtUpArea", parseInt(propertyData.details.builtUpArea));
        setValue("carpetArea", parseInt(propertyData.details.carpetArea));
        setValue("buildYear", parseInt(propertyData.details.builtYear));
        setValue("dimensions", parseInt(propertyData.details.dimensions));
        setValue("bedrooms", propertyData.details.bedrooms);
        setValue("bathrooms", propertyData.details.bathrooms);
        setValue("balcony", propertyData.details.balcony);
        setValue("parking", propertyData.details.parking);
        setValue("propertyCategory", propertyData.details.propertyCategory);
        setValue("status", propertyData.details.status);
        setValue("description", propertyData.description);
        setValue("ownerName", propertyData.owner.name);
        setValue("ownerContact", propertyData.owner.contact);
        setValue("ownerEmail", propertyData.owner.email);
        setValue("ownerAddress", propertyData.owner.address);
        setValue("amenities", propertyData.amenities);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProperty();
  }, [id, setValue]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    const res = await updateProperty(id, data);
    if (res.ok) {
      router.push(`/properties/${id}`);
    } else {
      toast.error("Failed to update property");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 grid gap-y-5 lg:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2 font-bold" htmlFor="propertyName">
            Property Name :
          </label>
          <input
            type="text"
            name="propertyName"
            id="propertyName"
            className="h-[50px] rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none lg:w-1/2"
            placeholder="Enter Property Name"
            {...register("propertyName", { required: true, maxLength: 80 })}
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
            name="address"
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
            name="airConditioning"
            id="airConditioning"
            className="h-5 w-5"
            value="Air Conditioning"
            {...register("amenities")}
          />
          <label htmlFor="airConditioning">Air Conditioning</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="heatingSystem"
            id="heatingSystem"
            className="h-5 w-5"
            value="Heating System"
            {...register("amenities")}
          />
          <label htmlFor="heatingSystem">Heating System</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="furnished"
            name="furnished"
            className="h-5 w-5"
            value="Furnished"
            {...register("amenities")}
          />
          <label htmlFor="furnished">Furnished</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="garden"
            name="garden"
            className="h-5 w-5"
            value="Garden"
            {...register("amenities")}
          />
          <label htmlFor="garden">Garden</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="securitySystem"
            name="securitySystem"
            className="h-5 w-5"
            value="Security System"
            {...register("amenities")}
          />
          <label htmlFor="securitySystem">Security System</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            className="h-5 w-5"
            value="Wifi"
            {...register("amenities")}
          />
          <label htmlFor="wifi">Wifi</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="swimmingPool"
            name="swimmingPool"
            className="h-5 w-5"
            value="Swimming Pool"
            {...register("amenities")}
          />
          <label htmlFor="swimmingPool">Swimming Pool</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="gym"
            name="gym"
            className="h-5 w-5"
            value="Gym"
            {...register("amenities")}
          />
          <label htmlFor="gym">Gym</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="water"
            id="water"
            className="h-5 w-5"
            value="24 Hours Water"
            {...register("amenities")}
          />
          <label htmlFor="water">24 Hours Water</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="lift"
            name="lift"
            className="h-5 w-5"
            value="Private Lift"
            {...register("amenities")}
          />
          <label htmlFor="lift">Private Lift</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="indoor"
            id="indoor"
            className="h-5 w-5"
            value="Indoor Games"
            {...register("amenities")}
          />
          <label htmlFor="indoor">Indoor Games</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="petFriendly"
            name="petFriendly"
            className="h-5 w-5"
            value="Pet-Friendly"
            {...register("amenities")}
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
          name="description"
          className="h-[200px] w-full  rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
          placeholder="Write big description about property"
          {...register("description", { required: true })}
        />
      </div>

      {/* images */}

      <button
        disabled={isLoading}
        className={`mx-auto mb-5 flex h-[50px] w-1/2 items-center justify-center rounded-xl ${!isLoading ? "bg-primary-500" : "bg-gray-500"}  text-white`}
      >
        {isLoading ? "Updating Please Wait.." : "Update Property"}
      </button>
    </form>
  );
}

export default PropertyEditForm;

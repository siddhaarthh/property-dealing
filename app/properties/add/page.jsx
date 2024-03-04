import React from "react";

function AddProperty() {
  return (
    <section className="mx-auto lg:w-[80%]">
      <div className=" w-full">
        {/* <h3 className="mb-4 font-playfair text-3xl  font-bold text-primary-500">
          Add new property
        </h3> */}

        <form>
          <div className="mb-5 grid grid-cols-2 gap-y-5">
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="propertyName">
                Property Name :
              </label>
              <input
                type="text"
                id="propertyName"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Property Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="price">
                Price :
              </label>
              <input
                type="number"
                id="price"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Price"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="address">
                Address :
              </label>
              <input
                type="text"
                id="address"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="location">
                Location :
              </label>
              <input
                type="text"
                id="location"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Property Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="builtUpArea">
                Built Up Area (sqft) :
              </label>
              <input
                type="number"
                id="builtUpArea"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter BuiltUp Area"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="price">
                Carpet Area (sqft) :
              </label>
              <input
                type="number"
                id="price"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Price"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="buildYear">
                Build Year :
              </label>
              <input
                type="number"
                id="buildYear"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Build Year"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="dimension">
                Dimensions (ft) :
              </label>
              <input
                type="number"
                id="dimension"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Property Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="bedrooms">
                Bedrooms :
              </label>
              <input
                type="number"
                id="bedrooms"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Bedroom Number"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold" htmlFor="bathrooms">
                Bathrooms :
              </label>
              <input
                type="number"
                id="bathrooms"
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Bathroom Number"
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
                className="h-[50px] w-1/2 rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Balcony Number"
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
                className="h-[50px] w-1/2 appearance-none rounded-lg border border-[#A4A6AC33] px-3"
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
                className="h-[50px] w-1/2 appearance-none rounded-lg border border-[#A4A6AC33] px-3"
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
                className="h-[50px] w-1/2 appearance-none rounded-lg border border-[#A4A6AC33] px-3"
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

          {/* description */}
          <div className="mb-5 flex flex-col">
            <label className="mb-2 font-bold" htmlFor="description">
              Description :
            </label>
            <textarea
              type="text"
              id="description"
              className="h-[200px] w-full  rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Write big description about property"
            />
          </div>

          {/* amenities */}

          <div className="mb-5 grid grid-cols-3 gap-y-2">
            <p className="mb-2 font-bold">Amenities:</p>

            <div className="flex items-center gap-4">
              <input type="checkbox" id="airConditioning" className="h-5 w-5" />
              <label htmlFor="airConditioning">Air Conditioning</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="heatingSystem" className="h-5 w-5" />
              <label htmlFor="heatingSystem">Heating System</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="parking" className="h-5 w-5" />
              <label htmlFor="parking">Parking</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="garden" className="h-5 w-5" />
              <label htmlFor="garden">Garden or Outdoor Space</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="securitySystem" className="h-5 w-5" />
              <label htmlFor="securitySystem">Security System</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="highSpeedInternet"
                className="h-5 w-5"
              />
              <label htmlFor="highSpeedInternet">
                High-Speed Internet Access
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="swimmingPool" className="h-5 w-5" />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="gym" className="h-5 w-5" />
              <label htmlFor="gym">Gym or Fitness Facilities</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="balcony" className="h-5 w-5" />
              <label htmlFor="balcony">Balcony or Terrace</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="elevator" className="h-5 w-5" />
              <label htmlFor="elevator">Elevator</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="laundry" className="h-5 w-5" />
              <label htmlFor="laundry">Laundry Facilities</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="petFriendly" className="h-5 w-5" />
              <label htmlFor="petFriendly">Pet-Friendly Features</label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProperty;

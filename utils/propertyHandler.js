import { toast } from "react-toastify";

const API_URL = "http://localhost:3000/api/properties";

// Function to fetch all properties
export const getPropertyHandler = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/properties`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching properties: ${error.message}`);
  }
};

// Function to fetch a single property by ID
export const getSingleProperty = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/properties/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch property: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

// Function to create a new property
export const createProperty = async (data) => {
  console.log(data);
  const sendData = JSON.stringify(data);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/properties`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendData,
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to create property: ${res.status}`);
    }

    toast.success("Property Created successfully");

    return res;
  } catch (error) {
    throw new Error(`Error creating property: ${error.message}`);
  }
};

// Function to delete a property by ID
export const deleteProperty = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/properties/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to delete property: ${res.status}`);
    }

    toast.success("Property deleted successfully");

    return res;
  } catch (error) {
    throw new Error(`Error deleting property: ${error.message}`);
  }
};

// Function to update a property by ID
export const updateProperty = async (id, data) => {
  console.log(data);
  const sendData = JSON.stringify(data);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/properties/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendData,
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to update property: ${res.status}`);
    }

    toast.success("Property updated successfully");

    console.log(res);

    return res;
  } catch (error) {
    console.log(`Error updating property: ${error.message}`);
  }
};

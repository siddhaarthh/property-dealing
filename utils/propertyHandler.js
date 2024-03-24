import { toast } from "react-toastify";

// Function to fetch all properties
export const getPropertyHandler = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/properties`, {
      cache: "no-store",
    });

    // Check if the response status is within the success range
    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.status}`);
    }

    // Parse the JSON response and return data
    return await res.json();
  } catch (error) {
    // Handle any errors that occur during the fetch operation or JSON parsing
    throw new Error(`Error fetching properties: ${error.message}`);
  }
};

// Function to fetch a single property by ID
export const getSingleProperty = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/properties/${id}`, {
      cache: "no-store",
    });

    // Check if the response status is within the success range
    if (!res.ok) {
      throw new Error(`Failed to fetch property: ${res.status}`);
    }

    // Parse the JSON response and return data
    return await res.json();
  } catch (error) {
    // Handle any errors that occur during the fetch operation or JSON parsing
    throw new Error(`Error fetching property: ${error.message}`);
  }
};

// Function to create a new property
export const createProperty = async (data) => {
  // Convert data to JSON format
  const sendData = JSON.stringify(data);

  try {
    const res = await fetch("http://localhost:3000/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });

    // Check if the response status is within the success range
    if (res.ok) {
      toast.success("Property Created successfully");
    }

    // Parse the JSON response and return data
    return res;
  } catch (error) {
    // Handle any errors that occur during the fetch operation or JSON parsing
    throw new Error(`Error creating property: ${error.message}`);
  }
};

export const deleteProperty = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/properties/${id}`, {
      method: "DELETE",
    });

    // Check if the response status is within the success range
    if (!res.ok) {
      throw new Error(`Failed to delete property: ${res.status}`);
    }

    if (res.ok) {
      toast.success("Property deleted successfully");
    } else {
      toast.error("Failed to delete property");
    }

    // Redirect to the properties page
    return res;
  } catch (error) {
    // Handle any errors that occur during the fetch operation or JSON parsing
    throw new Error(`Error deleting property: ${error.message}`);
  }
};

export const updateProperty = async (id, data) => {
  const sendData = JSON.stringify(data);

  try {
    const res = await fetch(`http://localhost:3000/api/properties/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });

    if (!res.ok) {
      throw new Error(`Failed to update property: ${res.status}`);
    }

    if (res.ok) {
      toast.success("Property updated successfully");
    } else {
      toast.error("Failed to update property");
    }

    return res;
  } catch (error) {
    throw new Error(`Error updating property: ${error.message}`);
  }
};

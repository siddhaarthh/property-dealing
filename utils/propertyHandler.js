// fetch all properties Handler
export const getPropertyHandler = async () => {
  const res = await fetch(`${process.env.API_URL}/api/properties`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// fetch single property Handler
export const getSingleProperty = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/properties/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// create property handler
export const createProperty = async (data) => {
  const sendData = JSON.stringify(data);

  try {
    const res = await fetch(`${process.env.API_URL}/api/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });

    return await res.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

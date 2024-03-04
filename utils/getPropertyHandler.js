export const getPropertyHandler = async () => {
  const res = await fetch(`${process.env.API_URL}/api/properties`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const getSingleProperty = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/properties/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

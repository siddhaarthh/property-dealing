export const getPropertyHandler = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/properties`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const getSingleProperty = async (id) => {
  const res = await fetch(`http://127.0.0.1:3000/api/properties/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

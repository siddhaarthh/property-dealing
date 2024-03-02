export const getPropertyHandler = async () => {
  const res = await fetch(`http://localhost:3000/api/properties`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

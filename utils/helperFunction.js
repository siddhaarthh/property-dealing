export const changeTo64 = async (imageFiles) => {
  const image64 = [];
  for (const image of imageFiles) {
    const imageBuffer = await image.arrayBuffer();
    const imageArray = new Uint8Array(imageBuffer);
    const imageData = Buffer.from(imageArray).toString("base64");
    image64.push(imageData);
  }

  return image64;
};

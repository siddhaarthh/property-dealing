import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";
import cloudinary from "@/utils/cloudinary";

export const GET = async (request) => {
  try {
    await ConnectDB();
    const property = await Property.find();
    const propertyJSON = JSON.stringify(property);
    return new Response(propertyJSON, {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const uploadFile = async (imageData) => {
    const imageUrls = [];

    for (const image of imageData) {
      try {
        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${image}`,
          {
            folder: "bitway",
          },
        );

        imageUrls.push(result.secure_url);
      } catch (error) {
        // Handle any errors that occur during image upload
        console.error("Error uploading image to Cloudinary:", error);
      }
    }

    return imageUrls;
  };

  try {
    await ConnectDB();

    const data = await request.json(); // Parse request body as JSON

    const propertyUrl = await uploadFile(data.propertyImages);

    const floorPlanUrl = await uploadFile(data.floorPlanImages);

    data.propertyImages = propertyUrl;
    data.floorPlanImages = floorPlanUrl;

    const property = await Property.create(data);

    return new Response(JSON.stringify(property), {
      // Return JSON response
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};

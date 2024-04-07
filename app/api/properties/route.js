import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";
import cloudinary from "@/utils/cloudinary";

// Handler for GET request to fetch all properties
export const GET = async (request) => {
  try {
    await ConnectDB();

    // Fetch all properties from the database
    const properties = await Property.find();

    // Convert properties to JSON string
    const propertyJSON = JSON.stringify(properties);

    // Return properties with 200 status code
    return new Response(propertyJSON, {
      status: 200,
    });
  } catch (error) {
    // Handle any errors that occur during the GET request
    return new Response(error.message, {
      status: 500,
    });
  }
};

// Handler for POST request to create a new property
export const POST = async (request) => {
  // Function to upload image data to Cloudinary
  const uploadFile = async (imageData) => {
    const imageUrls = [];

    for (const image of imageData) {
      try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${image}`,
          {
            folder: "bitway",
          },
        );

        // Push secure URL of uploaded image to imageUrls array
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

    // Parse request body as JSON
    const data = await request.json();

    // Upload property images to Cloudinary
    const propertyUrl = await uploadFile(data.propertyImages);

    // Upload floor plan images to Cloudinary
    const floorPlanUrl = await uploadFile(data.floorPlanImages);

    // Update data with uploaded image URLs
    data.propertyImages = propertyUrl;
    data.floorPlanImages = floorPlanUrl;

    // Create new property with updated data
    const property = await Property.create(data);

    // Redirect to property page with newly created property ID
    return Response.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/properties/${property._id}`,
    );
  } catch (error) {
    // Handle any errors that occur during the POST request
    return new Response(error.message, {
      status: 500,
    });
  }
};

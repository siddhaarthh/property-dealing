import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";

// GET /api/properties/user/[userId]

export const GET = async (request, { params }) => {
  try {
    await ConnectDB();

    // Extract userId from request parameters
    const { userId } = params;

    if (!userId) {
      return new Response("User ID is required", {
        status: 400,
      });
    }

    // Fetch all properties from the database
    const properties = await Property.find({ creatorId: userId });

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

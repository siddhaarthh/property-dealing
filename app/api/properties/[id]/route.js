import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";
import { getSessionUser } from "@/utils/getSession";

export const GET = async (request, { params }) => {
  try {
    await ConnectDB();
    const property = await Property.findById(params.id);
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

export const DELETE = async (request, { params }) => {
  try {
    const sessionUser = await getSessionUser();

    const { userId } = sessionUser;

    if (!sessionUser || userId === null) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    await ConnectDB();

    const propertyId = params.id;
    // Delete property from the database
    const property = await Property.findById(propertyId);

    if (!property) {
      return new Response("Property not found", {
        status: 404,
      });
    }

    const propertyJSON = JSON.stringify(property.creatorId);

    const userIdJson = JSON.stringify(userId);

    if (propertyJSON !== userIdJson) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    await Property.findByIdAndDelete(propertyId);

    // Return success message with 200 status code
    return new Response("Property deleted successfully", {
      status: 200,
    });
  } catch (error) {
    // Handle any errors that occur during the DELETE request
    return new Response(error.message, {
      status: 500,
    });
  }
};

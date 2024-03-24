import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";
import { getSessionUser } from "@/utils/getSession";
import { revalidatePath } from "next/cache";

// Get the property by id
export const GET = async (request, { params }) => {
  try {
    await ConnectDB();
    const property = await Property.findById(params.id);

    if (!property) {
      throw new Error("Property not found");
    }

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

// Delete property by id
export const DELETE = async (request, { params }) => {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      throw new Error("Unauthorized");
    }

    await ConnectDB();

    const propertyId = params.id;
    const property = await Property.findById(propertyId);

    if (!property) {
      throw new Error("Property not found");
    }

    const propertyJSON = JSON.stringify(property.creatorId);
    const userIdJson = JSON.stringify(sessionUser.userId);

    if (propertyJSON !== userIdJson) {
      throw new Error("Unauthorized");
    }

    await Property.findByIdAndDelete(propertyId);

    revalidatePath("/profile", "page");

    return new Response("Property deleted successfully", {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};

// Update property by id
export const PATCH = async (request, { params }) => {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      throw new Error("Unauthorized");
    }

    await ConnectDB();

    const propertyId = params.id;
    const property = await Property.findById(propertyId);

    if (!property) {
      throw new Error("Property not found");
    }

    const propertyJSON = JSON.stringify(property.creatorId);
    const userIdJson = JSON.stringify(sessionUser.userId);

    if (propertyJSON !== userIdJson) {
      throw new Error("Unauthorized");
    }

    const body = await request.json();

    await Property.findByIdAndUpdate(propertyId, body);

    revalidatePath("/properties/[id]", "page");

    return new Response("Property updated successfully", {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};

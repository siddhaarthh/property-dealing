import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";

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
  try {
    await ConnectDB();

    const data = await request.json(); // Parse request body as JSON

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

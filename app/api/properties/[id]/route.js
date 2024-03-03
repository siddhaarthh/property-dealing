import ConnectDB from "@/utils/database";
import { Property } from "@/model/propertyModel";

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

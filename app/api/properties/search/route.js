import { Property } from "@/model/propertyModel";
import ConnectDB from "@/utils/database";

export const GET = async (req) => {
  try {
    await ConnectDB();
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");
    const locationPattern = new RegExp(location, "i");

    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.city": locationPattern },
        { "location.state": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };

    if (propertyType !== "all") {
      const typePattern = new RegExp(propertyType, "i");
      query.type = typePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

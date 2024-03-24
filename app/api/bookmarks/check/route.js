import ConnectDB from "@/utils/database";
import User from "@/model/userModel";
import { getSessionUser } from "@/utils/getSession";
import { toast } from "react-toastify";

// Exporting a constant variable
export const dynamic = "force-dynamic";

// Exporting an async function named POST
export const POST = async (request) => {
  try {
    // Connect to the database
    await ConnectDB();

    // Extract the propertyId from the request body
    const { propertyId } = await request.json();

    // Get the session user
    const sessionUser = await getSessionUser();

    // Check if the session user is not available or doesn't have a userId
    if (!sessionUser || !sessionUser.userId) {
      return { status: 401, message: "Unauthorized" };
    }

    // Extract the userId from the session user
    const { userId } = sessionUser;

    // Find the user by their userId
    const user = await User.findById(userId);

    // Check if the user is not found
    if (!user) {
      return { status: 404, message: "User not found" };
    }

    // Check if the user's bookmarks include the propertyId
    const isBookmarked = user.bookmarks.includes(propertyId);

    // Return a JSON response with the isBookmarked value
    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    // Display an error toast with the error message
    toast(error.message);

    // Return an error response with the error message
    return new Response(error.message, {
      status: 500,
    });
  }
};

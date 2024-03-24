import ConnectDB from "@/utils/database";
import User from "@/model/userModel";
import { getSessionUser } from "@/utils/getSession";
import { toast } from "react-toastify";
import { Property } from "@/model/propertyModel";

// Export a constant variable
export const dynamic = "force-dynamic";

// Define a GET function
export const GET = async (request) => {
  try {
    await ConnectDB();

    // Get the session user
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return { status: 401, message: "Unauthorized" };
    }

    const { userId } = sessionUser;

    // Find the user by their ID
    const user = await User.findById(userId);

    // Get the user's bookmarks
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });

    if (!bookmarks) {
      return { status: 404, message: "Bookmarks not found" };
    }

    // Return the bookmarks as a JSON response
    return new Response(JSON.stringify(bookmarks), {
      status: 200,
    });
  } catch (error) {
    // Display an error toast
    toast(error.message);
    return new Response(error.message, {
      status: 500,
    });
  }
};

// Define a POST function
export const POST = async (request) => {
  try {
    await ConnectDB();

    // Get the property ID from the request body
    const { propertyId } = await request.json();

    // Get the session user
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return { status: 401, message: "Unauthorized" };
    }

    const { userId } = sessionUser;

    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return { status: 404, message: "User not found" };
    }

    // Check if the user already bookmarked the property
    let isBookmarked = user.bookmarks.includes(propertyId);

    let message;

    if (isBookmarked) {
      // If already bookmarked, remove it
      user.bookmarks.pull(propertyId);
      message = "Property removed from bookmarks";
      isBookmarked = false;
    } else {
      // If not bookmarked, add it
      user.bookmarks.push(propertyId);
      message = "Property added to bookmarks";
      isBookmarked = true;
    }

    // Save the user's changes
    await user.save();

    // Return a JSON response with the message and bookmark status
    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    // Display an error toast
    toast(error.message);
    return new Response(error.message, {
      status: 500,
    });
  }
};

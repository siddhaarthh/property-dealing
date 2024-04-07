import User from "@/model/userModel";
import ConnectDB from "@/utils/database";
import bcryptjs from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await ConnectDB();
    const data = await req.json();

    const salt = await bcryptjs.genSalt(10);
    data.password = await bcryptjs.hash(data.password, salt);

    const user = await User.create(data);
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.log(error.message);
    return new Response(error.message, { status: 500 });
  }
};

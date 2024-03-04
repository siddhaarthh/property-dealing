import GoogleProvider from "next-auth/providers/google";
import User from "@/model/userModel";
import ConnectDB from "./database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // connecting to the database
      await ConnectDB();

      // check if the user already exists in the database
      const existingUser = await User.findOne({ email: profile.email });

      if (!existingUser) {
        // create a new user if the user does not exist

        const username = profile.name.slice(0, 20);
        await User.create({
          username,
          email: profile.email,
          image: profile.picture,
        });
      }

      return true;
    },

    async session({ session }) {
      await ConnectDB();
      // get user from database
      const user = await User.findOne({ email: session.user.email });

      // assign the user id to the session
      session.user.id = user._id.toString();

      // return session
      return session;
    },
  },
};

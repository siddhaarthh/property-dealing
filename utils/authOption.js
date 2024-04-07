import GoogleProvider from "next-auth/providers/google";
import User from "@/model/userModel";
import ConnectDB from "./database";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await ConnectDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (!passwordMatch) {
            throw new Error("Invalid email or password");
          }

          return user;
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.username = user.username;
      }

      return token;
    },

    async session({ token, session }) {
      await ConnectDB();

      const user = await User.findById(token.id);

      session.user = {
        id: user.id,
        email: user.email,
        username: user.username,
        image: user.image,
      };

      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const authoption = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorizationUrl: 'https://github.com/login/oauth/authorize',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await connectDB();

        // Extract email from profile if not provided
        const userEmail = email || profile.email;
        if (!userEmail) {
          throw new Error('Email not available from profile');
        }

        const currentUser = await User.findOne({ email: userEmail });
        if (!currentUser) {
          const newUser = new User({
            email: userEmail,
            username: userEmail.split('@')[0],
          });
          await newUser.save();
          user.name = newUser.username;
        } else {
          user.name = currentUser.username;
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authoption as GET, authoption as POST };

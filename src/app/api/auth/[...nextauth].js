
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// export const authOptions = {

//   providers: [
//     GoogleProvider({
//       // clientId: process.env.GOOGLE_ID,
//       // clientSecret: process.env.GOOGLE_SECRET,
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
// };

// console.log('clientId:', process.env.GOOGLE_ID);
// console.log('clientSecret:', process.env.GOOGLE_SECRET);

// export default NextAuth(authOptions);







import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add other providers as needed
  ],
});

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";
import { signIn, signOut } from 'next-auth/react';
import { cookies } from "next/headers";


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    //signOut: "/signOut",
    
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  
},
  providers: [
    
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
          SELECT * FROM users WHERE email=${credentials?.email}
        `;
        const user = response.rows[0];

        console.log('userrr: ' + JSON.stringify(user))

        const cookieStore = cookies();
        //cookieStore.set('currentUser', user)
        cookieStore.set({name:'currentAvatar',value:user.avatar_url})

        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            avatarUrl: user.avatarUrl
          };
        }

        console.log("credentials", credentials);
        return null;
      },
    },
  
  ),
  ],
});

export { handler as GET, handler as POST, signIn,signOut };
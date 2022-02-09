import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "829673612172-qc8oojcljkr0oa3dhm9qsag6nmp3t5pj.apps.googleusercontent.com",
      clientSecret: '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',
    }),
    GithubProvider({
      clientId: "Iv1.884ed6c26dff89da",
      clientSecret: 'bbb0e4da8fe32bad1512fb7f7217444c151f4265',
    }),
  ],
})
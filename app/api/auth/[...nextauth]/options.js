
// https://github.com/settings/developers for github Oauth..










import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers:[
        GithubProvider({
            profile(profile){
                console.log("Profile for Git: ",profile)

                let userRole = "GitHub User";
                if(profile?.email == "karthikvishal1506@gmail.com"){
                    userRole = "Admin";
                }
                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            profile(profile){
                console.log("Profile for Google: ",profile)

          
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks:{
        async jwt({token,user}){
            if(user) token.role = user.role;
            return token;
        },
        async session({session,token}){
            if(session?.user) session.user.role = token.role;
            return session;
        }
    }

}
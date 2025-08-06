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
        })
    ]}
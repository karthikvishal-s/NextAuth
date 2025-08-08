"use client";

import { getProviders, signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Signin() {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const isAuthenticated = status === "authenticated";

  useEffect(() => {
    getProviders().then((prov) => setProviders(prov));
    setLoaded(true);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-2xl">Loading session...</p>
      </div>
    );
  }

  return (
    <div>
      {!isAuthenticated ? (
        !providers ? (
          <p className="text-black text-lg">Loading sign-in options...</p>
        ) : (
          Object.values(providers).map((provider, index) => (
            <div
              key={provider.id}
              className={`transition-all duration-1000 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${800 + index * 200}ms` }}
            >
              <button
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: "/login",
                    prompt: "select_account",
                  })
                }
                className="flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-rocker text-2xl md:text-4xl shadow hover:scale-105 transition-all duration-300"
              >
                <img
                  src="/google.png"
                  alt="Google"
                  className="h-10 w-10 mr-4 bg-white p-2 rounded-full"
                />
                Join the Roost
              </button>
            </div>
          ))
        )
      ) : (
        <>something</>
      )}
    </div>
  );
}

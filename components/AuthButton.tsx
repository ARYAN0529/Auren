"use client"; // uses browser-only things: useState, useEffect, Google login popup

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

export default function AuthButton() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check who's logged in when the page loads
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    // Updates the navbar instantly on login/logout
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  // Sends the user to Google, then back to /auth/callback
  const login = () =>
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });

  const style = "transition-colors hover:text-white/60";

  if (!user)
    return (
      <button onClick={login} className={style}>
        Login
      </button>
    );

  return (
    <button onClick={() => supabase.auth.signOut()} className={style}>
      {user.user_metadata.full_name?.split(" ")[0]} · Logout
    </button>
  );
}
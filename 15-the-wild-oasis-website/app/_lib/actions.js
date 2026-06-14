"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectedTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

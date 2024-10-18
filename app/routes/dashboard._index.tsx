import { json, LoaderFunction, redirect } from "@remix-run/cloudflare";

import { isUserAuthenticated } from "~/services/auth.server";

// @TODO: Finalize the loader function

export const loader: LoaderFunction = async ({ context, request }) => {
  if (await isUserAuthenticated(context, request)) {
    return json({ /* data */ });
  }
  // Not authenticated, redirect to login:
  return redirect("/auth/login", 302);
};

export default function Dashboard() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}
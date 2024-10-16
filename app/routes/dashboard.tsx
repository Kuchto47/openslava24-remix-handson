import { json, LoaderFunction, MetaFunction, redirect } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { getAuthenticatedUser } from "~/services/auth.server";

export const meta: MetaFunction = () => {
    return [
        { title: "Dashboard | Remix" },
        {
            property: "og:title",
            content: "Very cool dashboard",
        },
        {
            name: "description",
            content: "Remix Dashboard",
        },
    ];
};

export const loader: LoaderFunction = async ({ context, request }) => {
    // @TODO: Add dala loading and sending to the client
    
    const { user } = await getAuthenticatedUser(context, request);
    if (user) {
      return json({ok: true});
    }
    // Not authenticated, redirect to login:
    return redirect("/auth/login", 302);
  };

export default function Dashboard() {
    //const data = useLoaderData<typeof loader>()

    return (
        <div>
            Dashboard
            <br />
            <Outlet />
        </div>
    )
}
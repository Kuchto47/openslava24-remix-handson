import { json, LoaderFunction, MetaFunction, redirect, TypedResponse } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getAuthenticatedUser } from "~/services/auth.server";
import { getUrls, UrlObject } from "~/services/db.server";

type Urls = {
    urls: UrlObject[];
}

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

export const loader: LoaderFunction = async ({ context, request }): Promise<TypedResponse<Urls>> => {
    const urls = await getUrls(context)
    const { user } = await getAuthenticatedUser(context, request);
    if (user) {
      return json<Urls>({ urls });
    }
    // Not authenticated, redirect to login:
    return redirect("/auth/login", 302);
  };

export default function Dashboard() {
    const { urls } = useLoaderData<typeof loader>() as Urls

    return (
        <>
            <div>
                Dashboard
                <br />
                <Outlet />
            </div>
            <div>
                <ul>
                    {urls.map((url: UrlObject, index: number) => {
                        return (
                            <li key={index}>
                                {url.shortUrl} = {url.url}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
        
    )
}
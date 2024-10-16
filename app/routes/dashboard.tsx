import { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

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

export const loader = async () => {
    return ['Hello', 'Martin']
}

export default function Dashboard() {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            {data.map((d, i) => {
                return (
                    <>
                        <span key={i}>{d}</span>
                        <br />
                    </>
                )
            })}
        </div>
    )
}
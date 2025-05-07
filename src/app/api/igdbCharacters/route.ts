import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const clientID: string | undefined = process.env.IGDB_CLIENT_ID;
  const accessToken: string | undefined = process.env.IGDB_ACCESS_TOKEN;
  if (!clientID || !accessToken) {
    return new NextResponse(
      JSON.stringify({ error: "Missing IGDB credentials" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  console.log("Query", query);
  try {
    const igdbResponse = await fetch("https://api.igdb.com/v4/characters", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": clientID,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "text/plain",
      },
      body: `search "${query}"; fields name,  games.cover.image_id, description,mug_shot.image_id;`,
    });

    console.log("Query", query);
    const data = await igdbResponse.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error fetching IGDB data:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch IGDB data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

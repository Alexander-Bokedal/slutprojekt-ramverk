import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  const clientID: string | undefined = process.env.IGDB_CLIENT_ID;
  const accessToken: string | undefined = process.env.IGDB_ACCESS_TOKEN;
  if (!clientID || !accessToken) {
    return new NextResponse(
      JSON.stringify({ error: "Missing IGDB credentials" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
  const { id } = params;
  try {
    const igdbResponse = await fetch("https://api.igdb.com/v4/characters", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": clientID,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "text/plain",
      },
      body: `fields *; where id = ${id};`,
    });

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

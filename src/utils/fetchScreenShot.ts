export async function fetchScreenShot(id: number) {
  const clientID = process.env.IGDB_CLIENT_ID!;
  const accessToken = process.env.IGDB_ACCESS_TOKEN!;

  const res = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body: `fields screenshots.*;
where id = ${id}`,
  });

  if (!res.ok) {
    console.error("IGDB fetch failed", await res.text());
    return [];
  }

  console.log("This is returned");
  return res.json();
}

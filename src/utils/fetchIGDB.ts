export async function fetchIGDBData(query: string) {
  const clientID = process.env.IGDB_CLIENT_ID!;
  const accessToken = process.env.IGDB_ACCESS_TOKEN!;

  const res = await fetch("https://api.igdb.com/v4/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body: `fields name; search "${query}"; limit 10;`,
  });

  if (!res.ok) {
    console.error("IGDB fetch failed", await res.text());
    return [];
  }

  return res.json();
}

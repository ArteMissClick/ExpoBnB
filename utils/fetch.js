const GIST_URL =
  "https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json";

export async function fetchLocations() {
  if (Math.random() < 0.2) {
    throw new Error("Erreur de connexion simulee");
  }
  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  return response.json();
}

export function handleSearch(locations, searchTerm, maxPrice) {
  const text = searchTerm.trim().toLowerCase();
  const price = parseInt(maxPrice, 10);
  return locations.filter((item) => {
    const matchesText =
      !text || item.city.toLowerCase().includes(text) || item.title.toLowerCase().includes(text);
    const matchesPrice = Number.isNaN(price) || item.price <= price;
    return matchesText && matchesPrice;
  });
}

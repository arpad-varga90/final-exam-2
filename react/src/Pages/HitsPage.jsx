import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

async function getHits(albumId) {
  const response = await fetch(`/api/albums/${albumId}/hits`);
  const data = await response.json();
  return data;
}
function HitsPage() {
  const { albumId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["hits", albumId],
    queryFn: () => getHits(albumId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.hits) {
    return <div>No hits found for this album.</div>;
  }

  const sortedHits = data.hits.sort((a, b) => a.length - b.length);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Hits for Album ID: {albumId}</h1>
      <ul className="mt-4">
        {sortedHits.map((hit) => (
          <li key={hit.id} className="mb-2">
            <p className="text-xl font-semibold">{hit.title}</p>
            <p>Length: {hit.length} mins</p>
            <p>Popularity: {hit.popularityIndex}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HitsPage;

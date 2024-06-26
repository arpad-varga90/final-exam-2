import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

async function fetchAlbums() {
  const response = await fetch("/api/albums");
  const data = await response.json();
  return data;
}

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });
  const [expandedAlbumId, setExpandedAlbumId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlbums = data?.albums.filter((album) =>
    album.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="albums">
      <div className="container mx-auto p-4">
        {isLoading ? (
          <div>Albums loading...</div>
        ) : (
          <>
            <input
              type="text"
              className="w-full p-2 mb-2 border rounded"
              placeholder={`Search for an album`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-3 gap-4">
              {filteredAlbums.map((album) => (
                <div
                  key={album.id}
                  className=" flex h-40 w-auto p-4 border rounded-2xl shadow items-center justify-center"
                  onClick={() =>
                    setExpandedAlbumId(
                      expandedAlbumId === album.id ? null : album.id
                    )
                  }
                >
                  <div className="text-center font-bold">{album.name}</div>
                  {expandedAlbumId === album.id && (
                    <div className="mt-2">
                      <p>Release Year: {album.releaseYear}</p>
                      <p>Popularity: {album.popularity}</p>
                      <Link
                        to={`/albums/${album.id}/hits`}
                        className="underline"
                      >
                        View Hits
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;

import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const idsResponse = await fetch(
          "https://collectionapi.metmuseum.org/public/collection/v1/objects"
        );
        const idsData = await idsResponse.json();
        const randomId =
          idsData.objectIDs[
            Math.floor(Math.random() * idsData.objectIDs.length)
          ];

        const artResponse = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`
        );
        const artData = await artResponse.json();

        if (artData.primaryImage) {
          setArt(artData);
        } else {
          fetchArt();
        }
      } catch (error) {
        console.error("Error fetching art:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center text-center p-8 pt-20">
      <h1 className="text-8xl font-bold mb-6">404</h1>
      <p className="text-2xl mb-8">
        This page wandered off into the art world.
      </p>

      {loading ? (
        <p className="text-[#ff8383] text-xl">Fetching a masterpiece...</p>
      ) : art ? (
        <div className="max-w-md w-full flex flex-col items-center">
          <img
            src={art.primaryImage}
            alt={art.title}
            className="rounded-lg shadow-lg mb-6 max-w-full max-h-[60vh] object-contain"
          />
          <p className="text-lg font-semibold text-center">{art.title}</p>
          <p className="text-md italic text-center">
            {art.artistDisplayName || "Unknown Artist"}
          </p>
        </div>
      ) : (
        <p className="text-[#ff8383] text-xl">No artwork found.</p>
      )}

      <a
        href="/"
        className="mt-8 px-8 py-4 bg-[#ff8383] rounded-lg hover:bg-[#e06565] transition font-Serif"
      >
        Return Home
      </a>
    </div>
  );
};

export default NotFound;

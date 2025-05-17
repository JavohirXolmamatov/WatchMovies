import { useEffect, useState } from "react";
import tmdb from "../service/tmdb";

function TrailerModal({ id }) {
  const [videoKey, setVideoKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await tmdb.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`
        );
        const trailer = res.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) setVideoKey(trailer.key);
      } catch (error) {
        console.error("Video error:", error);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        ▶ Watch Trailer
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="w-[90%] md:w-[800px] h-[450px] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
            >
              ✖
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}`}
              title="YouTube Trailer"
              className="w-full h-full rounded shadow-xl"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrailerModal;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a> for SPA navigation

const generateStars = (count) => {
  return Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substring(2, 9), // Unique ID fix
    size: Math.random() * 2 + 1,
    top: `${Math.random() * -10}%`, // Start slightly off-screen
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "fall-topLeft" : "fall-topRight",
  }));
};

function NotFound() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));

    const interval = setInterval(() => {
      // Keep some old stars, add new ones to maintain the flow
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      {/* Falling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-white opacity-80 ${star.direction}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* UFO Image */}
        <div className="animate-bounce mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
            alt="UFO"
            className="w-[200px] md:w-[300px] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />
        </div>

        <h1 className="mb-2 text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          404
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Oops! Looks like this page got lost in space.
        </p>

        {/* Changed <a> to <Link> for React Router */}
        <Link
          to="/"
          className="px-8 py-3 text-white bg-purple-600 rounded-full font-semibold transition-all hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

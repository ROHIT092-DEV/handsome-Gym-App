import Link from "next/link";

function Hero() {
  return (
    <div className=" w-full  ">
      <div className="max-w-7xl mx-auto px-4 py-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
          {/* LEFT: Text Section */}
          <div className="  text-white rounded-xl shadow-xl px-6 py-12 md:p-16">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Transform Your <span className="text-indigo-500">Body</span> &{" "}
                <span className="text-indigo-500">Mind</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Join{" "}
                <span className="text-indigo-400 font-semibold">FitZone</span>{" "}
                and discover a world-class fitness experience with
                state-of-the-art equipment, expert trainers, and a supportive
                community.
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-2">
                <Link
                  href="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/video"
                  className="text-indigo-400 hover:underline font-medium text-lg"
                >
                  ▶ Watch Video
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Video Section */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Fitness Intro Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

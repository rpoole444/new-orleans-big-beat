export default function MusicPage() {
  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      description: "This is a description of video 1. It features an amazing performance by the band.",
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      description: "This is a description of video 2. Enjoy a unique blend of rhythm and melody.",
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      description: "This is a description of video 3. A captivating musical experience awaits.",
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
      description: "This is a description of video 4. A spectacular showcase of our latest music.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Music</h1>
      <div className="space-y-12">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center lg:justify-between gap-8`}
          >
            {/* Video */}
            <div className="flex-1">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg">
                <iframe
                  src={video.embedUrl}
                  title={`Video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg text-gray-300 leading-relaxed">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

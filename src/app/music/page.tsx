export default function MusicPage() {
  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/MqynNzRBlU4?si=qIMbddUo1aHeePFK",
      description: "Hey Pocky-a-way by The Meters",
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/82xL5wz3W_A?si=zhSMdkGfPkZTA5EW",
      description: "St. James Infirmary",
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/dEUheEidfKw?si=JDclkCp0PUunrNXM",
      description: "Sometimes I Wonder by Jon Cleary",
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/yGi_pyZp6z4?si=QWOxAsFHkzh2oVU8",
      description: "Down in New Orleans",
    },
  ];

  const personnel = `
    Reid Poole - Trumpet
    Tim Stombaugh - Drums
    Matt Horanzy - Guitar
    Steve Denny - Piano
    Paul McDaniel - Bass
  `;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Music</h1>
      <div className="space-y-16">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`border border-gray-600 rounded-lg p-8 bg-gray-800 shadow-lg ${
              index % 2 === 0 ? "lg:flex lg:flex-row" : "lg:flex lg:flex-row-reverse"
            } flex-col items-center gap-8`}
          >
            {/* Video */}
            <div className="w-full lg:w-1/2">
              <iframe
                width="100%"
                height="500px" // Increased height for videos
                src={video.embedUrl}
                title={`Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full rounded-lg"
              ></iframe>
            </div>

            {/* Description and Personnel */}
            
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:pl-8 lg:pr-8">
              <p className="text-2xl font-semibold text-gray-300 mb-6 pt-4">{video.description}</p>
              <div className="text-lg text-gray-400 whitespace-pre-wrap bg-gray-900 rounded-lg p-4 shadow-md">
                {personnel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
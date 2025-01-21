'use client'
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      {/* Welcome Section */}
      <div className="text-center py-20 bg-gradient-to-r from-gray-800 to-black text-white">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide font-serif  drop-shadow-lg">
          Welcome to New Orleans Big Beat
        </h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div> {/* Decorative line */}
        <p className="mt-6 text-xl italic tracking-wide opacity-90">
          Feel the soul of New Orleans music, right here.
        </p>
      </div>

      {/* Band Description Section */}
     <div className="container mx-auto px-6 max-w-6xl mt-16">
      <div className="bg-gray-900 text-gray-200 rounded-lg shadow-md p-12 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Description Section */}
        <div className="flex-1 lg:pr-8">
          <h2 className="text-4xl font-extrabold text-center lg:text-left">
            About the Band
          </h2>
          <p className="text-lg text-gray-300 text-center lg:text-left mt-4 leading-relaxed">
            We are a high-energy band bringing the vibrant rhythms and soulful grooves of New Orleans to every stage we grace. From funk to rhythm and blues, traditional jazz, and brass band classics, our music is a celebration of the rich musical legacy that defines the Big Easy.
            Inspired by icons like Nigel Hall, John Cleary, Dr. John, and the Preservation Hall Jazz Band, we blend heartfelt melodies with infectious beats that get everyone on their feet. With co-leaders, drummer, Tim Stombaugh, trumpeter, Reid Poole and guitarist Matt Horanzy at the helm, joined by pianist Steve Denny, and our incredible bassist Paul McDaniel, we feature some of the finest musicians in Colorado.
            You may have caught us lighting up the dance floor at the Axe and Oak in Colorado Springs or bringing the party to life at the Hotel Chamonix in Cripple Creek. Wherever we play, we promise a show full of passion, joy, and unforgettable moments.
            Ready to experience the magic of New Orleans? Let’s dance!
          </p>
        </div>

        {/* Photo Section */}
        <div className="flex-1 mt-10 lg:mt-0">
          <div className="bg-gray-700 w-full h-72 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-500 text-xl">Band Photo Here</span>
          </div>
        </div>
      </div>
    </div>


      {/* Call-to-Action Section */}
      <div className="bg-gray-800 text-white py-10 mt-10 bg-[url('/background.png')] bg-cover bg-center">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-8 text-center max-w-2xl">
            <h3 className="text-3xl font-bold tracking-wide mb-4">Ready to Book Us?</h3>
            <p className="text-lg opacity-100 mb-6">
              Let us bring the soul of New Orleans to your next event.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
'use client'
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      {/* Welcome Section */}
      <div className="text-center py-20 bg-gray-800 text-white">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg">
          Welcome to New Orleans Big Beat
        </h1>
        <p className="mt-6 text-xl italic tracking-wide opacity-90">
          Feel the soul of New Orleans music, right here.
        </p>
      </div>

      {/* Band Description Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl py-16 font-extrabold text-center bg-gray-900 text-gray-200 rounded-lg shadow-md">
          About the Band
        </h2>
        <p className="text-lg text-gray-300 text-center mt-4 px-8 leading-relaxed">
          We are a high-energy band bringing the vibrant rhythms and soulful grooves of New Orleans to every stage we grace. From funk to rhythm and blues, traditional jazz, and brass band classics, our music is a celebration of the rich musical legacy that defines the Big Easy.
          Inspired by icons like Nigel Hall, John Cleary, Dr. John, and the Preservation Hall Jazz Band, we blend heartfelt melodies with infectious beats that get everyone on their feet. With co-leaders, drummer, Tim Stombaugh and trumpeter, Reid Poole at the helm, joined by guitarist Matt Horanzy, pianist Steve Denny, and our incredible bassist Paul McDaniel, we feature some of the finest musicians in Colorado.
          You may have caught us lighting up the dance floor at the Axe and Oak in Colorado Springs or bringing the party to life at the Hotel Chamonix in Cripple Creek. Wherever we play, we promise a show full of passion, joy, and unforgettable moments.
          Ready to experience the magic of New Orleans? Let’s dance!
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-800 text-white py-10 mt-10">
        <h3 className="text-3xl font-bold text-center">Ready to Book Us?</h3>
        <p className="mt-4 text-center text-lg">
          Let us bring the soul of New Orleans to your next event.
        </p>
        <div className="mt-6 flex justify-center">
          <button onClick={() => router.push("/contact")} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
          Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
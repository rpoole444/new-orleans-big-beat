import Image from 'next/image';
import ReidImage from "../../../public/bandmembers/Reid.jpg"
import SteveImage from "../../../public/bandmembers/Steve.jpg"
import PaulImage from "../../../public/bandmembers/Paul.jpg"
import TimImage from "../../../public/bandmembers/Tim.jpg"
import MattImage from "../../../public/bandmembers/Matt.jpg"

export default function BandPage() {
  const members = [
    {
      name: "Tim Stombaugh",
      bio: "Space for Tim Stombaugh’s biography.",
      image: TimImage, // Replace with the actual image path
    },
    {
      name: "Reid Poole",
      bio: `Reid Poole is a versatile trumpet player and vocalist who spent over ten years immersing himself in the rich musical tapestry of New Orleans. As a bandleader, he led ensembles such as Dinosaurchestra, The Hi-Fi Swingtet, The New Orleans Night Owls, and the Reid Poole Quintet. He also collaborated with renowned groups like the Panorama Brass Band, The New Orleans Cottonmouth Kings, and Trumpet Mafia. Reid’s dynamic performances have graced iconic venues, including the Spotted Cat Music Club, d.b.a., the Royal Frenchmen Hotel, and Snug Harbor. Beyond performing, he is a dedicated educator, having taught at institutions such as Dillard University’s Music Industry Department. Now based in Colorado Springs, Reid continues to share his passion for music through performances and teaching.`,
      image: ReidImage, // Replace with the actual image path
    },
    {
      name: "Matt Horanzy",
      bio: "Space for Matt Horanzy’s biography.",
      image: MattImage, // Replace with the actual image path
    },
    {
      name: "Steve Denny",
      bio: "Space for Steve Denny’s biography.",
      image: SteveImage, // Replace with the actual image path
    },
    {
      name: "Paul McDaniel",
      bio: "Paul McDaniel has been one of the premier Bass guitarists in the Colorado area for 30 years. His versatility,deep groove, and creative edge keep him in high demand with a wide range of ensembles and composers. Paul is able to command many different styles while maintaining a strong personal voice on the instrument. Growing up in a highly diverse musical household, Paul was exposed to a huge variety of genres. After years of classical piano training, he found his calling with bass at the age of 11, an instrument he quickly excelled at. He began playing professionally at the age of 14. In his years playing music, Paul has played with diverse artists and ensembles as: The Motet,Kyle Hollingsworth Band,Henry Butler, Conjunto Colores, and Opie Gone Bad. In addition to his work in Colorado, Paul has toured throughout the US, Europe, Mexico, and the Caribbean.",
      image: PaulImage, // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Meet the Band</h1>
      <div className="space-y-12">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 bg-gray-800 rounded-lg shadow-md p-6"
          >
            {/* Picture */}
            <div className="flex-shrink-0">
              <Image
                src={member.image}
                alt={`${member.name}'s Picture`}
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
            </div>
            {/* Biography */}
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
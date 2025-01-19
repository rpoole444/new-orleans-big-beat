"use client"
import React, { useState } from "react"
import Image from 'next/image';
import ReidImage from "../../../public/bandmembers/Reid.jpg"
import SteveImage from "../../../public/bandmembers/Steve.jpg"
import PaulImage from "../../../public/bandmembers/Paul.jpg"
import TimImage from "../../../public/bandmembers/Tim.jpg"
import MattImage from "../../../public/bandmembers/Matt.jpeg"
import trumpetIcon from "../../../public/instrumentSvgs/trumpet.svg"
import guitarIcon from "../../../public/instrumentSvgs/guitars.svg"
import pianoIcon from "../../../public/instrumentSvgs/piano.svg"
import drumIcon from "../../../public/instrumentSvgs/drum.svg"
export default function BandPage() {
  const [activeToggle, setActiveToggle] = useState<number[]>([])
  const members = [
    {
      id: 1,
      name: "Tim Stombaugh",
      instrument: "Bandleader, Drums, & Vocals",
      bio: "Tim Stombaugh is a musical and versatile drummer who excels in several genres, to include pop, funk, soul and jazz.  In his formative years as a professional, he lived in Florida where he gained notoriety while attending the University of North Florida.  During his time as a student, Tim was quickly brought into the fold to perform with UNF faculty members such as Kevin Bales, Barry Greene, Bill Prince and Bunky Green.  Tim also poured himself into the local Jacksonville music scene where he simultaneously established himself as a top-call sideman in the North Florida region, touring and performing with Alligator Records recording artists JJ Grey and Mofro and the Broadway musicals “The Full Monty” and “42nd Street.”  Tim also toured with NYC piano crooner Loston Harris in addition to getting calls to sub for Butch Miles in the legendary Count Basie Orchestra. Tim currently resides in Colorado where he performs regularly with his own group, “The New Orleans Big Beat,” as well as with the Matt Horanzy trio and Reid Poole & the Night Owls along with several nationally-acclaimed musicians to include Origin Records artist Ricky Sweum, Grammy nominated Latin jazz artist Johnathan Powell and renowned jazz guitarist Wayne Wilkinson.  He also maintains a busy schedule as the percussion instructor at The Colorado College and serving as a worship team member for several churches in the Denver and Colorado Springs area.  Tim is an endorser artist for Canopus drums.",
      image: TimImage, 
      active: false,
      icon:drumIcon
    },
    {
      id: 2,
      name: "Reid Poole",
      instrument: "Trumpet & Vocals",
      bio: `Reid Poole is a versatile trumpet player and vocalist who spent over ten years immersing himself in the rich musical tapestry of New Orleans. As a bandleader, he led ensembles such as Dinosaurchestra, The Hi-Fi Swingtet, The New Orleans Night Owls, and the Reid Poole Quintet. He also collaborated with renowned groups like the Panorama Brass Band, The New Orleans Cottonmouth Kings, and Trumpet Mafia. Reid’s dynamic performances have graced iconic venues, including the Spotted Cat Music Club, d.b.a., the Royal Frenchmen Hotel, and Snug Harbor. Beyond performing, he is a dedicated educator, having taught at institutions such as Dillard University’s Music Industry Department. Now based in Colorado Springs, Reid continues to share his passion for music through performances and teaching.`,
      image: ReidImage,
      active: false,
      icon:trumpetIcon 

    },
    {
      id:3,
      name: "Matt Horanzy",
      instrument: "Guitar",
      bio: "Matt Horanzy is a guitarist living in Colorado Springs. He has lived and worked in Connecticut, Washington DC, and Tampa Florida before moving to Colorado where he currently performs with the United Stated Air Force Academy Band Falconaires. Matt is an award winning composer and arranger whose works have been performed by the New York Jazz Orchestra, the Airmen of Note, the New York Youth Symphony, and more. Matt is on faculty at Colorado College where he teaches guitar.",
      image: MattImage,
      active: false,
      icon:guitarIcon
    },
    {
      id: 4,
      name: "Steve Denny",
      instrument: "Piano & Organ",
      bio: "Steve Denny is an exquisitely emotive and versatile pianist, composer, and educator from Denver, Colorado, who creates indelible musical portraits through masterful virtuosity and touch. His expansive versatility spans jazz, classical, R&B, gospel, and beyond. Steve was a finalist in the prestigious Jacksonville Jazz Piano Competition in 2012 and 2015, and as a member of the University of Northern Colorado’s Lab Band I, he received a Downbeat Magazine award in 2008. He has performed in diverse settings, from New Orleans-style funk gigs to cabaret performances and gospel churches. As the leader of the Steve Denny Trio, he has released acclaimed albums, including Life in the Basement and Life in New York, which receive international airplay. With over fifteen years of teaching experience, Steve has taught piano at community colleges, music schools, and through private lessons. He holds a Bachelor of Arts in Music from Loyola University Chicago and a Master of Music in Jazz Studies from the University of Northern Colorado.",
      image: SteveImage, 
      active: false,
      icon:pianoIcon
    },
    {
      id: 5,
      name: "Paul McDaniel",
      instrument: "Bass",
      bio: "Paul McDaniel has been one of the premier Bass guitarists in the Colorado area for 30 years. His versatility,deep groove, and creative edge keep him in high demand with a wide range of ensembles and composers. Paul is able to command many different styles while maintaining a strong personal voice on the instrument. Growing up in a highly diverse musical household, Paul was exposed to a huge variety of genres. After years of classical piano training, he found his calling with bass at the age of 11, an instrument he quickly excelled at. He began playing professionally at the age of 14. In his years playing music, Paul has played with diverse artists and ensembles as: The Motet,Kyle Hollingsworth Band,Henry Butler, Conjunto Colores, and Opie Gone Bad. In addition to his work in Colorado, Paul has toured throughout the US, Europe, Mexico, and the Caribbean.",
      image: PaulImage, 
      active: false,
      icon:guitarIcon
    },
  ];

  const handleToggle = (id:number) => {
    setActiveToggle((prevToggle:any) => 
    prevToggle.includes(id) ? prevToggle.filter((i:number) => i != id) : [...prevToggle, id]);
  };
  const getToggleStyles = (instrument:string) => {
    switch (instrument) {
      case "Bandleader, Drums, & Vocals":
        return "bg-blue-500 hover:bg-blue-600";
      case "Trumpet & Vocals":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "Guitar":
        return "bg-red-500 hover:bg-red-600";
      case "Piano & Organ":
        return "bg-green-500 hover:bg-green-600";
      case "Bass":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Meet the Band</h1>
      <div className="space-y-12">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 mb-6"
          >
            {/* Top row: Photo, name/instrument, and toggle button */}
            <div className="flex items-center justify-around m-8">
              {/* Photo & Name/Instrument grouped together */}
              <div className="flex items-center space-x-4">
                <Image
                  src={member.image}
                  alt={`${member.name}'s Picture`}
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.instrument}</p>
                </div>
              </div>

            {/* SVG Icon with Open/Close text below */}
            <div className="flex flex-col items-center space-y-2">
              {/* SVG Icon */}
              <div
                onClick={() => handleToggle(member.id)}
                className={`cursor-pointer m-4 transform transition-transform duration-300 ${
                  activeToggle.includes(member.id) ? "rotate-90" : ""
                }`}
              >
                <Image
                  src={member.icon}
                  alt={`${member.instrument} icon`}
                  width={150}
                  height={100}
                />
              </div>
              {/* Open/Close Text */}
              {activeToggle.includes(member.id) ? (
                <p className="text-sm text-gray-400">Close Bio</p>
              ) : (
                <p className="text-sm text-gray-400">Open Bio</p>
              )}
            </div>
          </div>

            {/* Bio in its own row. Only render if toggled */}
            {activeToggle.includes(member.id) && (
              <div className="mt-12 text-gray-300 leading-relaxed">
                {member.bio}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
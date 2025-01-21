import Image from "next/image";
import instaSVG from "../../public/socialSVGS/instagram.svg"
import fbSVG from "../../public/socialSVGS/facebook.svg"
import youtubeSVG from "../../public/socialSVGS/youtube.svg"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 New Orleans Big Beat. All rights reserved.</p>
        <div className="inline-flex justify-center space-x-4 mt-2 bg-gray-500  p-4 border border-gray-300 rounded-lg shadow-md">
          <a 
            href="https://www.instagram.com/the_new_orleans_big_beat/" 
            className="hover:text-gray-400"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Image
              src={instaSVG}
              alt={`instagram icon`}
              width={80}
              height={80}         
              >     
            </Image>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61571994102221" 
            className="hover:text-gray-400"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Image
              src={fbSVG}
              alt={`facebook icon`}
              width={80}
              height={80}         
              >     
            </Image>  
          </a>
          <a 
            href="https://www.youtube.com/watch?v=dEUheEidfKw&list=PLdIYMOmYcdzEKsrig49iqkyg4ttbskwkr" 
            className="hover:text-gray-400"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Image
              src={youtubeSVG}
              alt={`youtube icon`}
              width={80}
              height={80}         
              >     
            </Image>
          </a>
        </div>
      </div>
    </footer>
  );
}
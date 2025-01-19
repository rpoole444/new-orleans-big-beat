import Link from "next/link";
import Image from "next/image";
import bandIcon from "../../public/Colorado Springs.jpg"
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="shadow-lg rounded">
          <Link href="/">
            <Image
              src={bandIcon}
              alt={`Big Beat Band Icon`}
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/music" className="hover:text-gray-400">Music</Link>
          <Link href="/band" className="hover:text-gray-400">Band</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
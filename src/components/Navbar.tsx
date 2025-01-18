import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">New Orleans Big Beat</Link>
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
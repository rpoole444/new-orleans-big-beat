export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 New Orleans Big Beat. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
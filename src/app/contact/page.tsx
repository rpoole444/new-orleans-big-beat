export default function ContactPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <form className="max-w-md mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block font-bold mb-2">Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Message</label>
          <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Send</button>
      </form>
    </div>
  );
}
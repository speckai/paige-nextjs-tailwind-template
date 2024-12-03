export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Your Website
        </h1>
        <p className="text-center text-lg mb-8">
          Get started by requesting a change.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}

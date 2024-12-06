export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Paige Template
        </h1>
        <p className="text-center text-lg mb-8">
          If you're seeing this, Paige is currently setting up your project. The changes will be reflected here shortly.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Celebrate
          </a>
        </div>
      </main>
    </div>
  );
}

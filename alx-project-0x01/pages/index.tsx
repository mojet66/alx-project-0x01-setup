import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-grow justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="font-bold text-white text-5xl">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-white text-xl">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="bg-white hover:bg-gray-200 mt-6 px-6 py-3 rounded-full font-semibold text-blue-500 transition">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;

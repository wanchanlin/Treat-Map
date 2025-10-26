import Head from 'next/head';
import Image from 'next/image';
// Corrected and cleaned up icon imports. Using 'fa6' for its specific icons.
import { FaApple, FaCandyCane, FaGhost, FaDownload, FaPen } from 'react-icons/fa';
import { FaMapLocationDot, FaLocationDot, FaSquareCheck } from 'react-icons/fa6'; // Correct import for specific Fa6 icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Head>
        <title>Treat Map</title>
        <meta name="description" content="Embark on a treat Map adventure this Halloween! Download now on the App Store." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaCandyCane className="text-pink-500 text-3xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              TreatMap
            </span>
          </div>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors"
          >
            <FaApple className="text-xl" />
            <span>Download on the App Store</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h3 className='text-lg font-medium text-pink-400'>Your Halloween Candy Guide!</h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Welcome to TreatMap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Tired of wandering around not knowing which houses give out the good candy?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <FaDownload />
              <span>Download Now</span>
            </a>
          </div>
        </section>

        {/* --- */}

        <h2 className='text-center mb-12 text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent' >
          Features You'll Love:
        </h2>
        <section className="grid md:grid-cols-4 gap-8 mb-20">

          {[
            {
              icon: <FaPen className="text-4xl text-pink-500" />,
              title: "Mark your home",
              description: "as a candy stop — full-size bars, mini treats, chips, or other goodies."
            },
            {
              icon: <FaMapLocationDot className="text-4xl text-orange-400" />,
              title: "Explore the map",
              description: "Find houses near you that are giving out the best treats."
            },
            {
              icon: <FaGhost className="text-4xl text-purple-400" />,
              title: "Spooky Challenges",
              description: "Complete mini-challenges on your route for extra fun and rewards."
            },
            {
              icon: <FaCandyCane className="text-4xl text-purple-400" />,
              title: "Halloween Routes",
              description: "Build a fun and safe Halloween route for you and your friends."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-800">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* --- */}

        <h2 className='text-center mb-12 text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent' >
          How TreatMap Works:
        </h2>
        {/* Corrected structural issue by removing the array wrapping the image and cleaning up the nested section */}
        <section className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12 mb-20">

          {/* Use the Next/Image component for local assets for better optimization, or a standard img tag if 'assets' is public */}
          {/* Note: If 'assets/images/screen.png' is in your 'public' folder, the src should be '/images/screen.png' */}
          <div className="flex-shrink-0">
            <img src="assets/images/screen.png" alt="App Screenshot of the TreatMap" className="rounded-xl shadow-2xl shadow-purple-500/50 w-64" />
          </div>

          <div className="grid gap-8 flex-grow">
            {[
              {
                icon: <FaLocationDot className="text-4xl text-pink-500" />,
                title: "Register Your Stop", // Added title for clarity
                description: "Add your home to the map and select what kind of treat you’re giving."
              },
              {
                icon: <FaCandyCane className="text-4xl text-orange-400" />,
                title: "Plan Your Route", // Added title for clarity
                description: "Check nearby candy stops and plan your trick-or-treat night efficiently."
              },
              {
                icon: <FaGhost className="text-4xl text-purple-400" />,
                title: "Verify Locations", // Added title for clarity
                description: "Visit and verify locations to keep the map fun and accurate for everyone!"
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-800 flex items-start space-x-4">
                <FaSquareCheck className="text-3xl text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- */}

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">✨ Join the Halloween fun and make your neighborhood the sweetest place to be. ✨</h2>
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="flex items-center justify-center bg-black text-white rounded-lg p-3 w-48 hover:bg-opacity-90 transition-colors border border-gray-700">
                <FaApple className="text-3xl mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold leading-none">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-6 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TreatMap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
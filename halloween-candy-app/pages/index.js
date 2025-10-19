import Head from 'next/head';
import Image from 'next/image';
import { FaApple, FaGamepad, FaCandyCane, FaGhost, FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Head>
        <title>Spooky Candy Quest - Halloween Adventure Game</title>
        <meta name="description" content="Embark on a spooky candy collecting adventure this Halloween! Download now on the App Store." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaCandyCane className="text-pink-500 text-3xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Spooky Candy Quest
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Collect. Survive. Conquer.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Embark on a spooky adventure through haunted neighborhoods, collecting candy and avoiding ghosts in this exciting Halloween game!
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

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaGamepad className="text-4xl text-pink-500" />,
              title: "Addictive Gameplay",
              description: "Simple to learn, challenging to master. Collect candies while avoiding spooky obstacles!"
            },
            {
              icon: <FaCandyCane className="text-4xl text-orange-400" />,
              title: "Power-ups & Boosters",
              description: "Unlock special candies with unique abilities to help you on your quest!"
            },
            {
              icon: <FaGhost className="text-4xl text-purple-400" />,
              title: "Spooky Challenges",
              description: "Face different ghosts and obstacles as you progress through the game!"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-800">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Available Exclusively on the App Store</h2>
          <div className="flex justify-center">
            <a 
              href="https://apps.apple.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="flex items-center justify-center bg-black text-white rounded-lg p-3 w-48 hover:bg-opacity-90 transition-colors">
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
          <p>© {new Date().getFullYear()} Spooky Candy Quest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
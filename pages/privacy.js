import Footer from '../components/footer';
import Head from 'next/head';
import { FaApple, FaCandyCane, FaCheckSquare, FaMapMarkerAlt, FaHeart, FaUserLock } from 'react-icons/fa';

export default function Privacy() {
  return (
    // Min-height to ensure footer is at the bottom, themed background
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Head>
        <title>Privacy Policy - TreatMap</title>
        <meta name="description" content="TreatMap Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- Header --- */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaCandyCane className="text-pink-500 text-3xl" aria-hidden="true" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              TreatMap
            </span>
          </div>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors shadow-lg"
            aria-label="Download TreatMap on the App Store"
          >
            <FaApple className="text-xl" aria-hidden="true" />
            <span>Download on the App Store</span>
          </a>
        </div>
      </header>
      {/* --- End Header --- */}

      <main className="container mx-auto px-6 py-12">
        {/* --- Policy Title and Date --- */}
        <section className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Last updated: October 2025</p>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent leading-tight">
            Privacy Policy – TreatMap
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains what information we collect and how we use it to provide the best trick-or-treating experience.
          </p>
        </section>
        {/* --- End Policy Title and Date --- */}

        {/* --- Policy Content Grid --- */}
        <div className="mx-auto max-w-5xl grid gap-20">

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-4xl font-bold mb-10 text-center">
              <FaMapMarkerAlt className="inline-block text-pink-500 mr-3" aria-hidden="true" />
              Information We Collect
            </h2>

            <div className="bg-purple-800/50 p-8 rounded-xl shadow-2xl border border-pink-500/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <FaCheckSquare className="text-3xl text-green-400 mr-3" aria-hidden="true" />
                Information You Voluntarily Provide
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                We collect information when you actively use the TreatMap service to share your Halloween contribution:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Location Data:</span> The specific location (e.g., house address or general marker) you choose to add to the public candy map. **Note: We do not track your live location.**
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Treat Type:</span> Your selection of treat categories (e.g., full-size candy, mini treats, chips, non-food items) to display at your marked location.
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Account Information (Optional):</span> If you create an account, we collect your display name and email address.
                </li>
              </ul>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-4xl font-bold mb-10 text-center">
              <FaHeart className="inline-block text-orange-500 mr-3" aria-hidden="true" />
              How We Use Your Information
            </h2>

            <div className="bg-purple-800/50 p-8 rounded-xl shadow-2xl border border-orange-500/50">
              <p className="text-lg text-gray-300 mb-6">
                The information we collect is used solely to provide and improve the TreatMap experience:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">To Operate TreatMap:</span> To display your contributed location and treat type on the public map for other users to see and navigate to.
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Communication:</span> To send you service updates or respond to your inquiries if you've provided an email address.
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Improvement:</span> To analyze map usage trends to enhance app features, performance, and user experience.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Data Sharing and Security */}
          <section>
            <h2 className="text-4xl font-bold mb-10 text-center">
              <FaUserLock className="inline-block text-yellow-500 mr-3" aria-hidden="true" />
              Data Sharing and Security
            </h2>

            <div className="bg-purple-800/50 p-8 rounded-xl shadow-2xl border border-yellow-500/50">
              <p className="text-lg text-gray-300 mb-6">
                We value your trust and are committed to protecting your data:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Public Information:</span> Your marked location and treat type are designed to be public and visible to all app users.
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">No Sale of Data:</span> We do not sell your personal information to third parties.
                </li>
                <li className="list-disc text-lg text-gray-300">
                  <span className="font-semibold text-white">Security:</span> We use administrative, technical, and physical safeguards to protect the information we collect and store.
                </li>
              </ul>
            </div>
          </section>

        </div>
        {/* --- End Policy Content Grid --- */}

        {/* --- Call to Action --- */}
        <section className="text-center mt-20 pt-10 border-t border-purple-700/50">
          <h2 className="text-3xl font-bold mb-8">✨ Join the Halloween fun and make your neighborhood the sweetest place to be. ✨</h2>
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="flex items-center justify-center bg-black text-white rounded-lg p-3 w-48 hover:bg-opacity-90 transition-colors shadow-xl">
                <FaApple className="text-3xl mr-2" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold leading-none">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </section>
        {/* --- End Call to Action --- */}
      </main>

      <Footer />
    </div>
  );
}
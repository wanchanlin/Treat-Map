import Link from 'next/link';

export default function Footer() {
  return (
  <footer className="bg-black bg-opacity-50 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">TreatMap</h3>
            <p className="text-gray-400">
              Making Halloween trick-or-treating more fun and safer for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-pink-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="../privacy" className="text-gray-400 hover:text-pink-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">Contact Us</h3>
            <a 
              href="mailto:support@treatmap.com" 
              className="text-gray-400 hover:text-pink-400 flex items-center gap-2"
            >
              📧 support@treatmap.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TreatMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
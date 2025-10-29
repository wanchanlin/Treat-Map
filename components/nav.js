import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
export default function Nav() {
  return (
     <header className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img src="/assets/images/logo.svg" alt="TreatMap Logo" className="h-12 " />
                
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
  );}
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Facebook, Star, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl shadow-lg z-50 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-rose-400">
                Emmy's Spa
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link href="/about" className="text-rose-400 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="https://book.squareup.com/appointments/fszhqc9c2bcr55/location/L6EP53HEFE8RQ/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-full font-medium shadow transition-all duration-200 ml-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 animate-glow"
                >
                  Book
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-rose-400">
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400"
              >
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Gallery
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Contact
              </Link>
              <a
                href="https://book.squareup.com/appointments/fszhqc9c2bcr55/location/L6EP53HEFE8RQ/services"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-full text-center shadow transition-all duration-200 mt-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 animate-glow"
              >
                Book
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* About Section */}
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-2xl animate-fade-in-up">About Emmy's Spa</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your premier beauty destination in St Pete Beach, Florida
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of St Pete Beach, Emmy's Spa has been providing exceptional beauty and wellness
                services for over 20 years. Our team of skilled professionals is dedicated to helping you look and feel
                your absolute best.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We pride ourselves on using only the finest products and latest techniques to ensure every visit leaves
                you feeling refreshed, rejuvenated, and beautiful. From nail care to hair styling, facial treatments to
                permanent makeup, we offer a comprehensive range of services in a relaxing, luxurious environment.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/store.jpg"
                alt="Emmy's Hair Salon & Spa Storefront"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-400 mb-2">20+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Years Experience</div>
              <div className="text-gray-600">Serving St Pete Beach community</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-400 mb-2">1000+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Happy Clients</div>
              <div className="text-gray-600">Satisfied customers and counting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-400 mb-2">5★</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Average Rating</div>
              <div className="text-gray-600">Consistently excellent service</div>
            </div>
          </div>
          <div className="bg-rose-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              At Emmy's Spa, our mission is to provide exceptional beauty and wellness services in a warm, welcoming
              environment. We believe that everyone deserves to feel beautiful and confident, and we're committed to
              helping our clients achieve their beauty goals through personalized service, expert techniques, and
              premium products.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-rose-400 mb-4">Emmy's Spa</h3>
              <p className="text-gray-300 mb-4">Your premier beauty destination in St Pete Beach, Florida.</p>
              <span className="block font-semibold text-gray-200 mb-2">Prefer to book by phone?</span>
              <a href="tel:7273604108" className="text-rose-400 underline mb-4 inline-block">(727) 360-4108</a>
              <span className="block text-sm text-gray-300 mb-4">You can also call to book your appointment!</span>
              <div className="mb-2">
                <span className="block text-md font-semibold text-gray-200 mb-2">Reviews & Socials</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/beautyandmorebyemmy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.yelp.com/biz/emmys-hair-and-nails-salon-st-pete-beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Star size={24} />
                </a>
                <a
                  href="https://www.groupon.com/deals/emmy-s-hair-nails-salon-6?srsltid=AfmBOorzHZa8Utbw0N7I4C7NY5E0wRSM5FwLRf38MI-md6nK8xNT8rbf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>(727) 360-4108</p>
                <p>emmyhair75@yahoo.com</p>
                <p>
                  5995 Gulf Winds Drive
                  <br />
                  St Pete Beach, FL 33706
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Emmy's Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

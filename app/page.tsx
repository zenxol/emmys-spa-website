"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Facebook, Star, ExternalLink } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl shadow-lg z-50 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold text-rose-500">
                Emmy's Spa
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-rose-500 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-rose-500">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500">
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500"
              >
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500">
                Gallery
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Images */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image src="/images/home1.jpg" alt="Professional Hair Styling" fill className="object-cover" priority />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image src="/images/home2.jpg" alt="Professional Nail Art" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl animate-fade-in-up">Emmy's Spa</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">Your Premier Beauty Destination in St Pete Beach</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="enhanced-button bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full font-medium shadow-lg transition-transform duration-200 transform hover:scale-105 animate-glow">
                Explore Our Services
              </Button>
            </Link>
            <a
              href="https://book.squareup.com/appointments/fszhqc9c2bcr55/location/L6EP53HEFE8RQ/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="enhanced-button bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 text-lg font-medium rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105 animate-glow">
                Book Appointment
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wavy SVG divider between hero and services */}
      <div className="-mt-2">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
          <path fill="#fff" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Popular Services</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Experience luxury and relaxation with our premium beauty services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="enhanced-card bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-rose-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nail Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Manicures, pedicures, and nail enhancements crafted to perfection
              </p>
              <p className="text-2xl font-bold text-rose-500">Starting at $20</p>
            </div>

            <div className="enhanced-card bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hair Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert cuts, styling, coloring, and treatments for every look
              </p>
              <p className="text-2xl font-bold text-rose-500">Starting at $25</p>
            </div>

            <div className="enhanced-card bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Facial Treatments</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Rejuvenating facials and advanced skincare solutions</p>
              <p className="text-2xl font-bold text-rose-500">Starting at $55</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button className="enhanced-button bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium shadow-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Unparalleled Experience</h2>
          <p className="text-xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Where luxury meets expertise. Every detail crafted for your comfort and satisfaction in the heart of St Pete
            Beach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery">
              <Button className="enhanced-button bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium shadow-lg">
                View Our Gallery
              </Button>
            </Link>
            <Link href="/about">
              <Button className="enhanced-button bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-rose-500 mb-4">Emmy's Spa</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your premier beauty destination in St Pete Beach, Florida. Experience luxury and relaxation like never
                before.
                <br />
                <span className="font-semibold">Prefer to book by phone?</span> Call us at <a href="tel:7273604108" className="text-rose-500 underline">(727) 360-4108</a> to make an appointment!
              </p>
              <div className="mb-2">
                <span className="block text-md font-semibold text-gray-700 mb-2">Reviews & Socials</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/beautyandmorebyemmy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                >
                  <Facebook size={20} className="text-rose-500" />
                </a>
                <a
                  href="https://www.yelp.com/biz/emmys-hair-and-nails-salon-st-pete-beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                >
                  <Star size={20} className="text-rose-500" />
                </a>
                <a
                  href="https://www.groupon.com/deals/emmy-s-hair-nails-salon-6?srsltid=AfmBOorzHZa8Utbw0N7I4C7NY5E0wRSM5FwLRf38MI-md6nK8xNT8rbf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                >
                  <ExternalLink size={20} className="text-rose-500" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-rose-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-rose-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-600 hover:text-rose-500 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-rose-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800 text-lg">Phone</p>
                <a href="tel:7273604108" className="text-rose-500 text-lg underline">(727) 360-4108</a>
                <p>emmyhair75@yahoo.com</p>
                <p className="leading-relaxed">
                  5995 Gulf Winds Drive
                  <br />
                  St Pete Beach, FL 33706
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Emmy's Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

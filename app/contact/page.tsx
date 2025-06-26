"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Menu, X, Facebook, Star, ExternalLink } from "lucide-react"

export default function ContactPage() {
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
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors"
                >
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
                <Link href="/contact" className="text-rose-400 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
                <a
                  href="https://book.squareup.com/appointments/4goy5s8ovk67r0/location/LMW7ZYEASQEDT/services"
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
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
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
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-rose-400">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Section */}
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-2xl animate-fade-in-up">Contact & Location</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us in St Pete Beach or get in touch to schedule your appointment. We're here to help you look and
              feel your best.
            </p>
          </div>

          <div className="-mt-2">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
              <path fill="#fff" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-4 rounded-full">
                    <Phone className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Phone</p>
                    <a href="tel:7273604108" className="text-rose-500 text-lg underline">(727) 360-4108</a>
                    <span className="block text-sm text-gray-500 mt-1">You can also call to book your appointment!</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-4 rounded-full">
                    <Mail className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Email</p>
                    <p className="text-gray-600 text-lg">emmyhair75@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-4 rounded-full">
                    <MapPin className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Address</p>
                    <p className="text-gray-600 text-lg">
                      5995 Gulf Winds Drive
                      <br />
                      St Pete Beach, FL 33706
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-4 rounded-full">
                    <Clock className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Hours</p>
                    <div className="text-gray-600 text-lg">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h3>
                <div className="mb-2">
                  <span className="block text-md font-semibold text-gray-700 mb-2">Reviews & Socials</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/beautyandmorebyemmy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-400 hover:bg-rose-200 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/emmys-hair-and-nails-salon-st-pete-beach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-400 hover:bg-rose-200 transition-colors"
                  >
                    <Star size={24} />
                  </a>
                  <a
                    href="https://www.groupon.com/deals/emmy-s-hair-nails-salon-6?srsltid=AfmBOorzHZa8Utbw0N7I4C7NY5E0wRSM5FwLRf38MI-md6nK8xNT8rbf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full text-rose-400 hover:bg-rose-200 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <a
                href="https://book.squareup.com/appointments/4goy5s8ovk67r0/location/LMW7ZYEASQEDT/services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-8 bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 text-lg">
                  Schedule Appointment
                </Button>
              </a>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.234567!2d-82.7406789!3d27.7251234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1234567890a%3A0x1234567890abcdef!2s5995%20Gulf%20Winds%20Dr%2C%20St%20Pete%20Beach%2C%20FL%2033706!5e0!3m2!1sen!2sus!4v1640995200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Emmy's Spa - 5995 Gulf Winds Drive, St Pete Beach, FL 33706"
                ></iframe>
              </div>

              <div className="bg-rose-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Parking & Accessibility</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Free parking available</li>
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Public transportation nearby</li>
                  <li>• Easy access from Gulf Boulevard</li>
                </ul>
              </div>
            </div>
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
                  <Link href="/about" className="text-gray-300 hover:text-rose-400 transition-colors">
                    About
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

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Facebook, Star, ExternalLink } from "lucide-react"

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const galleryImages = [
    { src: "/images/gallery/2.jpg", alt: "Chrome Mirror Finish Nails - Gold & Pink", category: "Nails" },
    { src: "/images/gallery/3.jpg", alt: "Bright Red Coral Nail Art", category: "Nails" },
    { src: "/images/gallery/4.jpg", alt: "Natural Nude Pink Manicure", category: "Nails" },
    { src: "/images/gallery/7.jpg", alt: "Red Acrylic Nails with Floral Design", category: "Nails" },
    { src: "/images/gallery/12.jpg", alt: "Pink Geometric Line Nail Art", category: "Nails" },
    { src: "/images/gallery/5.jpg", alt: "Sleek Bob with Highlights & Lowlights", category: "Hair" },
    { src: "/images/gallery/1.jpg", alt: "Blonde Layered Bob Haircut", category: "Hair" },
    { src: "/images/gallery/6.jpg", alt: "Long Wavy Hair with Professional Highlights", category: "Hair" },
    { src: "/images/gallery/9.jpg", alt: "Elegant Bridal Updo with Baby's Breath", category: "Hair" },
    { src: "/images/gallery/10.jpg", alt: "Vintage Bridal Hair with Floral Accessories", category: "Hair" },
    { src: "/images/gallery/11.jpg", alt: "Sleek Copper Auburn Bob Haircut", category: "Hair" },
    { src: "/images/gallery/8.jpg", alt: "Perfect Eyebrow Shaping & Natural Makeup", category: "Makeup" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
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
                <Link href="/gallery" className="text-rose-400 px-3 py-2 text-sm font-medium">
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
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-rose-400">
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

      {/* Gallery Section */}
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our beautiful spa and some of our amazing work. See the quality and care that goes into
              every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to experience Emmy's Spa for yourself? Book your appointment today!
            </p>
            <Link href="/contact">
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Appointment
              </button>
            </Link>
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

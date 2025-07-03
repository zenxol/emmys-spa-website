"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X, Facebook, Star, ExternalLink } from "lucide-react"

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const serviceCategories = [
    {
      title: "Manicure",
      services: [
        { name: "Classic Manicure", price: "$20" },
        { name: "Deluxe Manicure", price: "$30" },
        { name: "Gel/Shellac Manicure", price: "$35" },
      ],
    },
    {
      title: "Pedicure",
      services: [
        { name: "Classic Spa Pedicure", price: "$30", type: "Reg", description: "Balance & Relax from your soles up, as your feet and lower legs are soothed and stimulated" },
        { name: "Classic Spa Pedicure", price: "$50", type: "Gel", description: "With gel polish" },
        { name: "Deluxe Pedicure", price: "$45", type: "Reg", description: "Relieve tired, achy legs and feet with this remineralizing pedicure. This service has callus remover" },
        { name: "Deluxe Pedicure", price: "$60", type: "Gel", description: "With gel polish" },
        { name: "Deluxe Pedicure w Paraffin Wax", price: "$58", type: "Reg", description: "Includes paraffin wax treatment" },
        { name: "Deluxe Pedicure w Paraffin Wax", price: "$70", type: "Gel", description: "With gel polish and paraffin wax treatment" },
        { name: "Super Deluxe Pedicure", price: "$65", type: "Reg", description: "Invigorate and renew your feet with our fabulous organic spa pedicure. This gives your feet a balance of renewal" },
        { name: "Super Deluxe Pedicure", price: "$75", type: "Gel", description: "With gel polish and organic spa treatment" },
      ],
    },
    {
      title: "Nail Enhancements",
      services: [
        { name: "Acrylic", price: "$40+", type: "Full Set" },
        { name: "Acrylic", price: "$30", type: "Fill-in" },
        { name: "French Tip Gel", price: "$45+", type: "Full Set" },
        { name: "Acrylic Gel Color", price: "$55+", type: "Full Set" },
        { name: "Acrylic Gel Color", price: "$45", type: "Fill-in" },
        { name: "Ombre Acrylic", price: "$60+", type: "Full Set" },
        { name: "Ombre Acrylic", price: "$50", type: "Fill-in" },
        { name: "Pink and White", price: "$55+", type: "Full Set" },
        { name: "Pink and White", price: "$45", type: "Fill-in" },
        { name: "Dipping Powder", price: "$45+", type: "Full Set" },
        { name: "Pink and White Dip", price: "$55+", type: "Full Set" },
        { name: "Ombre Dip", price: "$55+", type: "Full Set" },
      ],
    },
    {
      title: "Hair Services",
      services: [
        { name: "Men's Cut", price: "$25+" },
        { name: "Men's Cut w Shampoo", price: "$30+" },
        { name: "Ladies Cut", price: "$28+" },
        { name: "Ladies Cut and Style", price: "$45+" },
        { name: "Shampoo and Style", price: "$40+" },
        { name: "Hair Color Root Touchup", price: "$60+" },
        { name: "Highlights", price: "$95+" },
        { name: "Perm", price: "$75+" },
        { name: "Updo", price: "$60+" },
        { name: "Braids", price: "$40+" },
        { name: "Balayage/Ombre", price: "$150+" },
        { name: "Makeup", price: "$55+" },
        { name: "Makeup with Lashes (Strips)", price: "$75+" },
      ],
    },
    {
      title: "Permanent Makeup",
      services: [
        { name: "Eyebrows Ombre/Microblading", price: "$380+" },
        { name: "Eyeliner Upper and Lower", price: "$280" },
        { name: "Lips", price: "$350" },
      ],
    },
    {
      title: "Eyelashes",
      services: [
        { name: "Eyelash Extensions", price: "$95+", type: "Full Set" },
        { name: "Eyelash Extensions", price: "$45+", type: "Fill" },
        { name: "Eyelash Lift and Tint", price: "$55" },
        { name: "Eyelash Lift", price: "$45" },
      ],
    },
    {
      title: "Eyebrows",
      services: [
        { name: "Brow Tinting", price: "$15" },
        { name: "Brow Tinting, Waxing, and Shaping", price: "$35" },
        { name: "Brow Laminating, Tinting, and Shaping", price: "$45" },
      ],
    },
    {
      title: "Waxing",
      services: [
        { name: "Eyebrows", price: "$15" },
        { name: "Lip", price: "$7" },
        { name: "Chin", price: "$10" },
        { name: "Full Arms", price: "$40+" },
        { name: "Half Arms", price: "$30+" },
        { name: "Under Arm", price: "$25" },
        { name: "Full Legs", price: "$55" },
        { name: "Half Legs", price: "$35+" },
        { name: "Back", price: "$45" },
        { name: "Facial Wax", price: "$45+" },
        { name: "Chest", price: "$40+" },
        { name: "Bikini", price: "$40+" },
      ],
    },
    {
      title: "Facial",
      services: [
        {
          name: "Express Facial",
          price: "$55+",
          description: "Tailored by your Esthetician to refreshing individual skin concerns.",
        },
        {
          name: "Gentlemen's Facial",
          price: "$85",
          description: "Exfoliating, repairs damage and dullness aging and environmental impacts",
        },
        {
          name: "Ocean Miracle Treatment",
          price: "$105",
          description:
            "Tightening effect to improve the signs of aging. Fusion of natural active ingredients and the latest technology",
        },
        {
          name: "Infinity Treatment",
          price: "$110",
          description:
            "Youth activating treatment. A new and revolutionary, prevents and helps reduce the visible signs of aging",
        },
        {
          name: "Advance Nacar Treatment",
          price: "$120",
          description: "Brightening with an advanced formula made with the most powerful next generation acids together with advanced liposomal technology. Helps to improve the super facial layer of dark spots and stimulates skin renewal."
        },
        { name: "Eye Treatment", price: "$25", description: "Brightening dark circles and relief puffiness." },
      ],
    },
    {
      title: "Other Services",
      services: [
        { name: "Polish Change (Hands)", price: "$15+" },
        { name: "Polish Change (Feet)", price: "$15+" },
        { name: "Gel Polish Change", price: "$25" },
        { name: "American/French", price: "$5" },
        { name: "Acrylic Nail Fix", price: "$5+" },
        { name: "Design", price: "$5" },
        { name: "Soak Off", price: "$10" },
        { name: "Callus Treatment", price: "$10" },
        { name: "Paraffin Dip", price: "$10+" },
        { name: "Foot Massage", price: "$10+" },
      ],
    },
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
                <Link href="/services" className="text-rose-400 px-3 py-2 text-sm font-medium">
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
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-rose-400">
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Gallery
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Services Section */}
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services, each designed to enhance your natural
              beauty and promote relaxation.
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-rose-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-800">{service.name}
                          {"type" in service && service.type && (
                            <span className="ml-2 px-2 py-1 rounded bg-rose-100 text-rose-500 text-xs font-semibold align-middle">{service.type}</span>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-rose-400 mb-2">{service.price}</div>
                        {"description" in service && service.description && (
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to book your appointment? Contact us today to schedule your visit to Emmy's Spa.
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

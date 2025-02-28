import { useState } from 'react';
import { 
  ChevronRight, 
  Code, 
  Smartphone, 
  Globe, 
  Server, 
  ArrowRight, 
  Menu, 
  X,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useNavigate } from 'react-router';

const SoftwareAgencyLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const ContactUs = () => {
    window.location.href = 'https://wa.me/+919270165215';
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Header */}
      <header className="px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={28} className="text-orange-500" />
          <span className="text-2xl font-bold">
            ASN TECH STUDIO<span className="text-orange-500"></span>
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-orange-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-orange-500 transition">Services</a>
          <a
            href="https://saudsayyed.vercel.app/"
            className="hover:text-orange-500 transition"
          >
            Our Work
          </a>
          <button onClick={ContactUs} className="hover:text-orange-500 transition">Contact</button>
        </nav>

        <button 
          onClick={ContactUs} 
          className="hidden md:flex items-center bg-orange-500 text-black px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Contact <ChevronRight size={16} />
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a
              href="https://saudsayyed.vercel.app/"
              className="hover:text-orange-500 transition"
            >
              Our Work
            </a>
            <a href="#process" className="hover:text-orange-500 transition">Process</a>
            <button onClick={ContactUs} className="hover:text-orange-500 transition">Contact</button>
            <button 
              onClick={ContactUs} 
              className="flex items-center bg-orange-500 text-black px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Contact <ChevronRight size={16} className="ml-2" />
            </button>
          </nav>
        </div>
      )}

      {/* Hero section */}
      <section className="px-4 py-16 md:py-32 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Turn <span className="text-orange-500">Ideas</span> Into Digital <span className="text-orange-500">Reality</span>
            </h1>
            <p className="text-gray-400 mt-6 text-lg md:text-xl">
              Custom software solutions that drive growth and transform businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={ContactUs} className="bg-orange-500 text-black px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition flex items-center justify-center">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </button>
              <a 
                href="https://saudsayyed.vercel.app/" 
                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-orange-500 hover:text-black transition"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="px-4 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            End-to-end software development solutions tailored to your business needs
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">
                Responsive websites and progressive web apps built with modern technologies.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-400">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Software</h3>
              <p className="text-gray-400">
                Bespoke software solutions to automate and optimize your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-lg border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="text-orange-500">transform</span> your business?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Let's discuss how our custom software solutions can help you achieve your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={ContactUs} 
                className="bg-orange-500 text-black px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code size={24} className="text-orange-500" />
            <span className="text-xl font-bold">ASN TECH STUDIO</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://instagram.com/as_techstudio" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram size={20} className="text-gray-400 hover:text-orange-500 transition" />
            </a>
            <a 
              // href="https://x.com/your_twitter" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Twitter size={20} className="text-gray-400 hover:text-orange-500 transition" />
            </a>
            <a 
              href="https://www.linkedin.com/in/astech-studio-92440b353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} className="text-gray-400 hover:text-orange-500 transition" />
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © 2025 AS TECH STUDIO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareAgencyLanding;

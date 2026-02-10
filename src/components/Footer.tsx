import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-brand-accent">Al-Huda Society</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            A pillar of faith, community, and service. Dedicated to providing spiritual guidance and supporting the needs of our diverse community.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-400 hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/prayer-times" className="text-slate-400 hover:text-brand-accent transition-colors">Prayer Times</Link></li>
            <li><Link to="/activities" className="text-slate-400 hover:text-brand-accent transition-colors">Activities & Programs</Link></li>
            <li><Link to="/education" className="text-slate-400 hover:text-brand-accent transition-colors">Educational Classes</Link></li>
            <li><Link to="/news" className="text-slate-400 hover:text-brand-accent transition-colors">Latest News</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin className="text-brand-accent shrink-0 mt-1" size={20} />
              <span>123 Community Drive, Faith City, FC 56789</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Phone className="text-brand-accent shrink-0" size={20} />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Mail className="text-brand-accent shrink-0" size={20} />
              <span>info@alhudasociety.org</span>
            </li>
          </ul>
        </div>

        {/* Map Placeholder/Preview */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Location</h4>
          <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
            {/* Embedded maps usually require an iframe, but for this demo, we'll use a styled div with a text overlay */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937650493!2d-73.98731968459377!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1653422112345!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              title="Masjid Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Al-Huda Muslim Society & Masjid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

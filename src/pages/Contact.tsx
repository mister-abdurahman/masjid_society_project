import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-brand-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have questions about our programs, services, or events? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-primary mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary/80 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 py-3 rounded-xl bg-brand-muted/50 border border-brand-accent/10 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary/80 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 py-3 rounded-xl bg-brand-muted/50 border border-brand-accent/10 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary/80 ml-1">Subject</label>
                  <select className="w-full px-5 py-3 rounded-xl bg-brand-muted/50 border border-brand-accent/10 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Madrasah Registration</option>
                    <option>Event Participation</option>
                    <option>Funeral Services</option>
                    <option>Marriage/Nikah Inquiries</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary/80 ml-1">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we help you?" 
                    className="w-full px-5 py-3 rounded-xl bg-brand-muted/50 border border-brand-accent/10 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full md:w-fit btn-primary flex items-center justify-center gap-3 py-4 md:px-12">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-3xl font-bold text-brand-primary mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-brand-muted/30 p-8 rounded-3xl border border-brand-accent/10 transition-transform hover:scale-[1.02]">
                  <Mail className="text-brand-accent mb-4" size={32} />
                  <h3 className="font-bold text-brand-primary mb-2">Email Us</h3>
                  <p className="text-slate-600">info@alhudasociety.org</p>
                  <p className="text-slate-600">office@alhudasociety.org</p>
                </div>
                <div className="bg-brand-muted/30 p-8 rounded-3xl border border-brand-accent/10 transition-transform hover:scale-[1.02]">
                  <Phone className="text-brand-accent mb-4" size={32} />
                  <h3 className="font-bold text-brand-primary mb-2">Call Us</h3>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-slate-600">Mon-Fri: 9AM - 5PM</p>
                </div>
              </div>
              
              <div className="bg-brand-primary text-white p-8 rounded-3xl flex-grow flex flex-col justify-center items-center text-center">
                <MapPin className="text-brand-accent mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">Visit Our Masjid</h3>
                <p className="text-white/70 max-w-xs leading-relaxed">
                  123 Community Drive, Faith City, FC 56789. <br />
                  Located conveniently near the City Center.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 w-full">
                  <p className="text-sm text-brand-accent font-bold uppercase tracking-widest">Office Hours</p>
                  <p className="text-white/60">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-white/60">Prayer Hours: Always open during Salah times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

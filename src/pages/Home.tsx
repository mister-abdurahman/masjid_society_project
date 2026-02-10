import { motion } from 'framer-motion';
import { Calendar, BookOpen, Users, MessageSquare, ChevronRight } from 'lucide-react';
import PrayerTimesWidget from '../components/PrayerTimesWidget';
import ActivityCard from '../components/ActivityCard';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Darkened Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://id-preview--0a5a860e-4097-4eb3-889b-30e407f7b3ff.lovable.app/assets/hero-mosque-Cr84mpz4.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Faith, Community, <br />
                <span className="text-brand-accent">& Service.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Welcome to Al-Huda Society and Masjid – a vibrant hub for worship, education, and meaningful community connection.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary transform hover:scale-105 transition-all text-lg px-8 py-3">
                  Our Activities
                </button>
                <button className="px-8 py-3 rounded-md border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-lg">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PrayerTimesWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  {/* We can use a placeholder image or generate one here later */}
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                    Masjid Interior Shot
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-center p-4 shadow-xl z-20">
                  EST. 1995
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">About Al-Huda</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                A Place of Peace and <br />Spiritual Growth
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                For over two decades, Al-Huda Society has served as more than just a place of prayer. We are a dedicated center for learning, social development, and community support, following the principles of compassion and excellence.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3 text-brand-primary font-medium">
                  <ChevronRight className="text-brand-accent" />
                  <span>Comprehensive Islamic Education</span>
                </li>
                <li className="flex items-center space-x-3 text-brand-primary font-medium">
                  <ChevronRight className="text-brand-accent" />
                  <span>Youth Leadership & Development</span>
                </li>
                <li className="flex items-center space-x-3 text-brand-primary font-medium">
                  <ChevronRight className="text-brand-accent" />
                  <span>Community Outreach & Support</span>
                </li>
              </ul>
              <button className="text-brand-primary font-bold text-lg flex items-center space-x-2 group hover:text-brand-accent transition-colors">
                <span>Discover Our History</span>
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Hub */}
      <section className="py-24 bg-brand-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Our Core Activities</h2>
            <p className="text-lg text-slate-600">
              Explore the various programs and initiatives designed to enrich our community's spiritual and social life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard 
              title="Events & Lectures"
              description="Join us for weekly halaqas, guest speakers, and community dinners that inspire and inform."
              icon={<Calendar size={32} />}
              gradient="blue"
              link="/activities"
            />
            <ActivityCard 
              title="Islamic Education"
              description="From children's Madrasah to adult Fiqh classes, we offer learning for every stage of life."
              icon={<BookOpen size={32} />}
              gradient="gold"
              link="/education"
            />
            <ActivityCard 
              title="Community Groups"
              description="Specialized circles for youth, sisters, and seniors to foster brotherhood and sisterhood."
              icon={<Users size={32} />}
              gradient="emerald"
              link="/activities"
            />
          </div>
        </div>
      </section>

      {/* News & CTA */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="w-16 h-16 text-brand-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Connected With Us</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and never miss an update on prayer times, events, and community announcements.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
            />
            <button className="btn-primary whitespace-nowrap px-8">
              Join Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Import for ArrowRight since I missed it in the component list
import { ArrowRight } from 'lucide-react';

export default Home;

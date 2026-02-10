import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Subpage Header */}
      <section className="bg-brand-primary py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Al-Huda
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl">
            A legacy of faith and community service since 1995.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold text-brand-primary mb-6">Our History</h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              Al-Huda Society was founded in 1995 by a small group of families dedicated to establishing a supportive environment for Muslim families in the region. What began as a small prayer space in a rented basement has grown into a vibrant, multi-facility center serving thousands of community members.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
              <div className="bg-brand-muted p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide a welcoming space for worship, promote Islamic values of compassion and justice, and empower our community through education and service.
                </p>
              </div>
              <div className="bg-brand-primary text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-brand-accent mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To be a leading center of spiritual excellence that inspires positive change and fosters a harmonious, integrated community.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-primary mb-6">Leadership & The Imam</h2>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-brand-muted/50 p-8 rounded-3xl mb-16">
              <div className="w-48 h-48 bg-slate-300 rounded-2xl shrink-0 overflow-hidden">
                {/* Photo Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold uppercase">Imam Photo</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Sheikh Abdullah Rahman</h3>
                <span className="text-brand-accent font-semibold block mb-4 uppercase tracking-wider text-sm">Head Imam & Religious Director</span>
                <p className="text-slate-600 italic relative">
                  <Quote className="absolute -top-4 -left-6 text-brand-accent/20 w-12 h-12" />
                  "Our Masjid is a home for everyone. We strive to be a beacon of guidance and a source of comfort for all who seek knowledge and spiritual peace."
                </p>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              Under the guidance of our Board of Directors and spiritual leadership, Al-Huda Society continues to expand its reach, offering innovative programs that address the modern challenges faced by our youth and families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

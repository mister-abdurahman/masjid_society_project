import { motion } from 'framer-motion';
import { Calendar, Clock, Info, Quote } from 'lucide-react';
import PrayerTimesWidget from '../components/PrayerTimesWidget';

const PrayerTimes = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="bg-brand-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Daily Prayer Schedule
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Accurate Salah and Iqamah times for our local community.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-primary mb-8 flex items-center gap-3">
                <Clock className="text-brand-accent" />
                Today's Times
              </h2>
              <PrayerTimesWidget />
            </div>

            <div className="lg:w-1/2 flex flex-col">
              <div className="bg-white p-10 rounded-3xl border border-brand-accent/10 shadow-sm flex-grow flex flex-col justify-center text-center relative overflow-hidden group">
                <Quote className="absolute top-6 left-6 text-brand-accent/10 w-24 h-24 transform -rotate-12 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-brand-primary mb-6 uppercase tracking-widest text-sm">
                    Virtue of Prayer
                  </h3>
                  <p className="text-2xl md:text-3xl text-slate-700 font-serif italic mb-8 leading-relaxed">
                    "The most beloved deed to Allah is the prayer at its proper time."
                  </p>
                  <p className="text-brand-accent font-bold">
                    — Prophet Muhammad (ﷺ)
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    (Sahih Al-Bukhari)
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-brand-primary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Jummah Schedule</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10 text-brand-accent font-bold">
                    <span>1st Service:</span>
                    <span>1:15 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 text-brand-secondary font-bold">
                    <span>2nd Service:</span>
                    <span>2:15 PM</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-white/60 italic">
                  * Please arrive 15 minutes early to secure parking and seating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerTimes;

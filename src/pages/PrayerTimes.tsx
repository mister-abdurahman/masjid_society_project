import { motion } from 'framer-motion';
import { Calendar, Clock, Info } from 'lucide-react';
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
              
              <div className="mt-12 bg-white p-8 rounded-3xl border border-brand-accent/10 shadow-sm">
                <h3 className="text-xl font-bold text-brand-primary mb-6 flex items-center gap-2">
                  <Info className="text-brand-accent" />
                  About Our Times
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Prayer times are calculated based on the 18.0° degree angle for Fajr and Isha, which is standard for our region.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm p-3 bg-brand-muted/50 rounded-lg">
                    <span className="font-semibold">Calculation Method:</span>
                    <span>Islamic Society of North America (ISNA)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-3 bg-brand-muted/50 rounded-lg">
                    <span className="font-semibold">Asr Method:</span>
                    <span>Shafi'i/Maliki/Hanbali</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-primary mb-8 flex items-center gap-3">
                <Calendar className="text-brand-accent" />
                Monthly Calendar Preview
              </h2>
              <div className="overflow-x-auto bg-white rounded-3xl border border-brand-accent/10 shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-brand-primary text-white text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Day</th>
                      <th className="px-6 py-4">Fajr</th>
                      <th className="px-6 py-4">Dhuhr</th>
                      <th className="px-6 py-4">Asr</th>
                      <th className="px-6 py-4">Maghrib</th>
                      <th className="px-6 py-4">Isha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-accent/5 text-slate-600 text-sm">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <tr key={day} className={day === 1 ? 'bg-brand-accent/10 font-bold text-brand-primary' : 'hover:bg-brand-muted/50'}>
                        <td className="px-6 py-4 capitalize">{new Date(2026, 1, day).toLocaleString('en-us', {weekday: 'short', day: 'numeric'})}</td>
                        <td className="px-6 py-4">05:3{day}</td>
                        <td className="px-6 py-4">12:30</td>
                        <td className="px-6 py-4">15:45</td>
                        <td className="px-6 py-4">17:1{day}</td>
                        <td className="px-6 py-4">18:45</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-6 text-center border-t border-brand-accent/5">
                  <button className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center gap-2 mx-auto">
                    Download Full PDF Calendar
                    <Info size={16} />
                  </button>
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

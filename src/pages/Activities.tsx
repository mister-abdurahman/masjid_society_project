import { motion } from 'framer-motion';
import { Calendar, Users, Coffee, Heart, Star } from 'lucide-react';

const Activities = () => {
  const events = [
    {
      title: "Family Community Dinner",
      date: "Friday, Feb 20, 2026",
      time: "6:30 PM",
      location: "Main Community Hall",
      description: "A monthly gathering for families to share a meal, hear a short uplifting reminder, and connect with neighbors.",
      icon: <Coffee className="text-brand-accent" />
    },
    {
      title: "Youth Leadership Workshop",
      date: "Saturday, Feb 21, 2026",
      time: "11:00 AM",
      location: "Youth Center",
      description: "Developing the next generation of leaders through skills training, mentoring, and community service projects.",
      icon: <Users className="text-brand-accent" />
    },
    {
      title: "Weekly Qur'an Halaqa",
      date: "Every Monday",
      time: "After Maghrib",
      location: "Main Prayer Hall",
      description: "Deep dive into the meanings of the Qur'an with Sheikh Abdullah. Open to all brothers and sisters.",
      icon: <Heart className="text-brand-accent" />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-brand-muted/30">
      <section className="bg-brand-primary py-20 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Activities & Programs
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            From social gatherings to spiritual workshops, find a program that fits your journey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-primary mb-12 flex items-center gap-3">
                <Calendar className="text-brand-accent" />
                Upcoming Events
              </h2>
              
              <div className="space-y-8">
                {events.map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm border border-brand-accent/10 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row"
                  >
                    <div className="md:w-16 bg-brand-accent/10 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-brand-accent/10">
                      {event.icon}
                    </div>
                    <div className="p-8 flex-grow">
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-brand-primary mb-1">{event.title}</h3>
                          <p className="text-brand-accent font-semibold">{event.date} • {event.time}</p>
                        </div>
                        <span className="px-4 py-1 bg-brand-muted text-brand-primary rounded-full text-sm font-bold uppercase tracking-wider">
                          {event.location}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6">{event.description}</p>
                      <button className="text-brand-primary font-bold hover:text-brand-accent transition-colors">Register Now →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-brand-primary rounded-3xl p-8 text-white sticky top-28">
                <Star className="text-brand-accent w-12 h-12 mb-6" fill="currentColor" />
                <h3 className="text-2xl font-bold mb-4">Recurring Groups</h3>
                <p className="text-white/70 mb-8">These groups meet regularly to support specific community needs.</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Users size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">Sisters' Circle</h4>
                      <p className="text-sm text-white/60">Every 1st Saturday, 2 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Star size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">New Muslims Corner</h4>
                      <p className="text-sm text-white/60">Wednesdays, 6 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Heart size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">Elderly Social Club</h4>
                      <p className="text-sm text-white/60">Tuesdays, 10 AM</p>
                    </div>
                  </li>
                </ul>
                <button className="w-full btn-primary bg-white text-brand-primary mt-10 hover:bg-brand-accent hover:text-white transition-colors">
                  Inquire about Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;

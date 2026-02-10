import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';

const Education = () => {
  const classes = [
    {
      title: "Children's Madrasah",
      age: "Ages 5-13",
      subjects: ["Arabic Reading", "Quran Memorization", "Islamic Studies", "Character Building"],
      schedule: "Sat & Sun, 10 AM - 1:30 PM",
      status: "Ongoing"
    },
    {
      title: "Adult Quranic Studies",
      age: "Adults (Brothers & Sisters)",
      subjects: ["Tajweed Rules", "Meaning & Tafsir", "Selected Surahs"],
      schedule: "Wednesdays, After Isha",
      status: "Ongoing"
    },
    {
      title: "Essential Fiqh Classes",
      age: "Ages 16+",
      subjects: ["Purification", "Salah", "Fasting", "Everyday Interactions"],
      schedule: "Mondays, 7 PM - 8:30 PM",
      status: "Ongoing"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <section className="bg-brand-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <GraduationCap className="w-16 h-16 text-brand-accent mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Islamic Education</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Cultivating knowledge and faith for generations. Our educational programs are designed to provide a deep understanding of our deen in a modern context.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {classes.map((cls, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-brand-muted/30 rounded-3xl p-10 border border-brand-accent/10 flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-brand-primary p-3 rounded-2xl">
                    <BookOpen size={28} className="text-brand-accent" />
                  </div>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    cls.status === 'Enrolling Now' ? 'bg-emerald-100 text-emerald-700' : 'bg-brand-primary/10 text-brand-primary'
                  }`}>
                    {cls.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-brand-primary mb-2">{cls.title}</h3>
                <p className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-6">{cls.age}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <h4 className="font-bold text-brand-primary/80 text-sm italic">Focus Areas:</h4>
                  <ul className="space-y-3">
                    {cls.subjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <ShieldCheck size={18} className="text-emerald-600" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-brand-accent/10">
                  <div className="flex items-center gap-3 text-brand-primary font-semibold">
                    <UserCheck size={20} className="text-brand-accent" />
                    <span>{cls.schedule}</span>
                  </div>
                  <button className="w-full btn-primary bg-brand-primary text-white mt-8 hover:bg-brand-accent transition-all">
                    Register For Class
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Support Student Education</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Your donations help us provide scholarships and improve our facilities for the next generation of students.
          </p>
          <button className="btn-primary transform scale-110">Donate to Madrasah</button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-10 top-10 text-brand-accent/5 select-none font-bold text-9xl">IQRA</div>
        <div className="absolute right-10 bottom-10 text-brand-accent/5 select-none font-bold text-9xl">KNOWLEDGE</div>
      </section>
    </div>
  );
};

export default Education;

import { motion } from 'framer-motion';
import { Newspaper, ChevronRight, Calendar } from 'lucide-react';

const News = () => {
  const posts = [
    {
      title: "Ramadan 2026 Announcement",
      date: "Feb 10, 2026",
      category: "Announcements",
      excerpt: "The Moon Sighting Committee will meet on March 20th to determine the start of the holy month of Ramadan.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "New Youth Center Expansion",
      date: "Feb 5, 2026",
      category: "Community",
      excerpt: "We are excited to announce the breaking of ground for our new 5,000 sq ft youth facility coming this fall.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interfaith Community Dialogue",
      date: "Jan 28, 2026",
      category: "Events",
      excerpt: "Leaders from diverse faith backgrounds gathered at Al-Huda to discuss social cohesion and mutual support.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-brand-muted/30">
      <section className="bg-brand-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold flex items-center gap-4"
          >
            <Newspaper className="text-brand-accent" size={48} />
            News & Updates
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-accent/5 hover:shadow-xl transition-all group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-accent text-brand-primary font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-brand-primary group/link">
                    <span>Read Article</span>
                    <ChevronRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-lg">
              Load More News
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

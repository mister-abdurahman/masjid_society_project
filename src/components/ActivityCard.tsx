import { ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: 'blue' | 'gold' | 'emerald' | 'rose';
  link: string;
}

const ActivityCard = ({ title, description, icon, gradient, link }: ActivityCardProps) => {
  const gradientClasses = {
    blue: 'from-brand-primary to-blue-800',
    gold: 'from-brand-accent to-yellow-600',
    emerald: 'from-emerald-700 to-teal-900',
    rose: 'from-rose-700 to-pink-900',
  };

  return (
    <div className={cn(
      "relative group overflow-hidden rounded-2xl p-8 text-white transition-all duration-500 hover:scale-[1.02] shadow-lg",
      "bg-gradient-to-br",
      gradientClasses[gradient]
    )}>
      <div className="relative z-10">
        <div className="mb-6 p-3 bg-white/20 backdrop-blur-md rounded-xl w-fit transition-transform group-hover:scale-110 duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/80 mb-6 leading-relaxed">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-flex items-center space-x-2 font-semibold text-white group/btn"
        >
          <span>Learn More</span>
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
      
      {/* Decorative inner glow/glass element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
    </div>
  );
};

export default ActivityCard;

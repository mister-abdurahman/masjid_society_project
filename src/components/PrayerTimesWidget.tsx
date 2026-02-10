import { Clock } from 'lucide-react';

const PrayerTimesWidget = () => {
  const prayers = [
    { name: 'Fajr', time: '5:30 AM', iqamah: '6:00 AM' },
    { name: 'Dhuhr', time: '12:30 PM', iqamah: '1:00 PM' },
    { name: 'Asr', time: '3:45 PM', iqamah: '4:15 PM' },
    { name: 'Maghrib', time: '5:15 PM', iqamah: '5:20 PM' },
    { name: 'Isha', time: '7:45 PM', iqamah: '8:15 PM' },
    { name: 'Jummah', time: '1:15 PM', iqamah: '-' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-brand-accent/20">
      <div className="bg-brand-primary p-4 text-white flex justify-between items-center">
        <h3 className="text-xl font-bold flex items-center space-x-2">
          <Clock size={24} className="text-brand-accent" />
          <span>Prayer Times</span>
        </h3>
        <span className="text-sm font-medium opacity-80">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>
      
      <div className="p-0">
        <div className="grid grid-cols-3 bg-brand-muted/50 p-3 text-xs font-bold uppercase tracking-wider text-brand-primary border-b border-brand-accent/10">
          <span>Salah</span>
          <span>Adhan</span>
          <span>Iqamah</span>
        </div>
        
        <div className="divide-y divide-brand-accent/10">
          {prayers.map((prayer, index) => (
            <div key={prayer.name} className={`grid grid-cols-3 p-4 items-center transition-colors hover:bg-brand-muted/30 ${index === 4 ? 'bg-brand-accent/5 font-bold' : ''}`}>
              <span className="text-brand-primary font-semibold">{prayer.name}</span>
              <span className="text-slate-600 tabular-nums">{prayer.time}</span>
              <span className="text-brand-primary tabular-nums">{prayer.iqamah}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-brand-accent p-3 text-brand-primary text-center text-sm font-bold">
        Next Prayer: Isha in 2h 15m
      </div>
    </div>
  );
};

export default PrayerTimesWidget;

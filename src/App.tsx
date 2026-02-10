import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Education from './pages/Education';
import News from './pages/News';
import Contact from './pages/Contact';
import PrayerTimes from './pages/PrayerTimes';

// Remaining Placeholder
const Donate = () => (
  <div className="py-24 bg-brand-muted min-h-[60vh] flex items-center justify-center">
    <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-xl mx-auto border border-brand-accent/20">
      <div className="w-20 h-20 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </div>
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Support Your Masjid</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Your generosity sustains our community, maintains our facilities, and funds our educational programs. Jazakallah Khair for your support.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <button className="py-3 px-4 border-2 border-brand-accent/30 rounded-xl hover:bg-brand-accent hover:text-white font-bold transition-all">$50</button>
        <button className="py-3 px-4 border-2 border-brand-accent/30 rounded-xl hover:bg-brand-accent hover:text-white font-bold transition-all">$100</button>
        <button className="py-3 px-4 border-2 border-brand-accent/30 rounded-xl hover:bg-brand-accent hover:text-white font-bold transition-all">$250</button>
      </div>
      <button className="w-full btn-primary py-4 text-lg">Donate Via Secure Portal</button>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/prayer-times" element={<PrayerTimes />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/education" element={<Education />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

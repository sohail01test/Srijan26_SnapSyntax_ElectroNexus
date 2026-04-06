import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Dumbbell
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800/50' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-lime-400 rounded-tl-xl rounded-br-xl flex items-center justify-center transform -skew-x-12">
            <Dumbbell className="text-zinc-950 w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Barbell<span className="text-lime-400">Club</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Programs', 'Trainers', 'Facilities', 'Membership'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-zinc-300 hover:text-lime-400 transition-colors uppercase tracking-wider">
              {link}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95">
            Join Now <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            className="md:hidden text-zinc-100 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden">
          {['Programs', 'Trainers', 'Facilities', 'Membership'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-lg font-semibold text-zinc-300 hover:text-lime-400 uppercase tracking-wide">
              {link}
            </a>
          ))}
          <button className="mt-4 flex items-center justify-center gap-2 bg-lime-400 text-zinc-950 px-6 py-3 rounded-full font-bold w-full">
            Join Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};
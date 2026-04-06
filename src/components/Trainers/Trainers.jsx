import { ArrowUpRight } from 'lucide-react';
import { TwitterX, Instagram } from '@boxicons/react'

export default function Trainers() {
  const coaches = [
    { name: "Marcus Vance", specialty: "Head Strength Coach", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" },
    { name: "Sarah Connor", specialty: "HIIT & Mobility", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" },
    { name: "David Goggins", specialty: "Endurance & Mindset", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" },
    { name: "Elena Rostova", specialty: "Olympic Weightlifting", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-zinc-950" id="trainers">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">The Elite Team</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              World-Class <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700">Coaching</span>
            </h3>
          </div>
          <button className="flex items-center gap-2 text-white hover:text-lime-400 transition-colors uppercase font-bold tracking-wider text-sm pb-2 border-b border-lime-400/30 hover:border-lime-400">
            Meet all trainers <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative h-[400px] rounded-3xl overflow-hidden bg-zinc-900">
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-1">{coach.specialty}</p>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{coach.name}</h4>
                
                {/* Social Links (Hidden until hover) */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-lime-400 hover:text-zinc-950 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-lime-400 hover:text-zinc-950 transition-colors">
                    <TwitterX className="w-4 h-4" /> 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Strength & Power",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
      tags: ["Powerlifting", "Hypertrophy"]
    },
    {
      title: "High Intensity",
      image: "https://images.unsplash.com/photo-1549719386-74dfcfa7bg?q=80&w=1470&auto=format&fit=crop", // placeholder fallback
      fallback: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1469&auto=format&fit=crop",
      tags: ["Crossfit", "Endurance"]
    },
    {
      title: "Mobility & Yoga",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop",
      tags: ["Flexibility", "Recovery"]
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800" id="programs">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">Programs</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Battle</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              {/* Image with fallback handling */}
              <img 
                src={prog.image} 
                onError={(e) => { e.target.src = prog.fallback || prog.image }}
                alt={prog.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Border effect overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400/50 rounded-3xl transition-colors duration-300 z-10 m-2"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-4">
                  {prog.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-zinc-900 bg-lime-400 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-2">{prog.title}</h4>
                <div className="flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-sm font-bold uppercase tracking-wider">Explore Program</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
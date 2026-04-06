import { 
  Dumbbell,
  Timer, 
  Zap,
} from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-zinc-950 relative" id="facilities">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">Why Choose Barbell Club</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              More than just <br/> a place to lift.
            </h3>
          </div>
          <p className="text-zinc-400 font-medium max-w-sm mt-6 md:mt-0">
            We provide an elite environment designed specifically to help you reach peak performance, featuring world-class equipment and expert guidance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
          
          {/* Box 1: Large Image */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
              alt="Equipment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="w-12 h-12 rounded-full bg-lime-400/20 backdrop-blur-md flex items-center justify-center mb-4">
                <Dumbbell className="text-lime-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Premium Equipment</h4>
              <p className="text-zinc-300 text-sm font-medium">State-of-the-art machines from Rogue and Eleiko to ensure you have the best tools.</p>
            </div>
          </div>

          {/* Box 2: Small Text Block */}
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-lime-400/50 transition-colors">
            <div className="absolute -right-10 -top-10 text-zinc-800 group-hover:text-zinc-700 transition-colors">
              <Timer className="w-48 h-48" strokeWidth={1} />
            </div>
            <h4 className="text-5xl font-black text-white tracking-tighter mb-2 z-10">24/7</h4>
            <h5 className="text-xl font-bold text-lime-400 uppercase tracking-tight z-10 mb-2">Unlimited Access</h5>
            <p className="text-zinc-400 text-sm font-medium z-10 max-w-sm">Train on your schedule. Secure biometric entry ensures you can hit your goals anytime, day or night.</p>
          </div>

          {/* Box 3: Accent Block */}
          <div className="md:col-span-1 bg-lime-400 rounded-3xl p-8 flex flex-col justify-between hover:bg-lime-300 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center">
              <Zap className="text-lime-400 w-5 h-5" />
            </div>
            <div>
              <h4 className="text-3xl font-black text-zinc-950 uppercase tracking-tight leading-none mb-2">Expert <br/>Coaches</h4>
              <p className="text-zinc-800 text-sm font-bold">1-on-1 guidance.</p>
            </div>
          </div>

          {/* Box 4: Medium Image */}
          <div className="md:col-span-1 rounded-3xl overflow-hidden relative group">
             <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
              alt="Community" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-xl font-black text-white uppercase tracking-tight">Recovery Zone</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
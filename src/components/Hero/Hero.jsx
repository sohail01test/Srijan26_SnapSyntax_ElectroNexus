import { 
  Play, 
  Activity
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Graphic elements */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[18vw] font-black text-outline whitespace-nowrap select-none pointer-events-none z-0">
        NO LIMITS
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start pt-12 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">New facility opening soon</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
            Redefine <br />
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Limits</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-md mb-10 leading-relaxed font-medium">
            In a space built for warriors, every drop of sweat tells a story - and yours is just beginning. Where ambition meets discipline, and stength becomes identity
          </p>
          
          <div className="flex flex-wrap items-center gap-4 w-full">
            <button className="bg-lime-400 hover:bg-lime-300 text-zinc-950 px-8 py-4 rounded-full font-bold tracking-wide uppercase transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(163,230,53,0.5)]">
              Start Free Trial
            </button>
            <button className="group flex items-center gap-3 px-6 py-4 rounded-full font-bold text-white hover:text-lime-400 transition-colors">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-700 group-hover:border-lime-400 flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 ml-1" />
              </div>
              View Facility
            </button>
          </div>
        </div>

        {/* Right Image/Graphics */}
        <div className="lg:col-span-6 relative h-[600px] w-full hidden lg:block">
          {/* Main Image Masked */}
          <div className="absolute inset-0 right-[-10%] top-[-5%] overflow-hidden rounded-3xl z-10 border border-zinc-800">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
              alt="Athlete training" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
          </div>

          {/* Floating Stat Card 1 */}
          <div className="absolute bottom-12 -left-12 z-20 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center">
              <Activity className="text-lime-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-white leading-none">24/7</p>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Facility Access</p>
            </div>
          </div>

          {/* Floating Stat Card 2 */}
          <div className="absolute top-24 -right-8 z-20 bg-zinc-100 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 rotate-6">
            <div className="flex -space-x-3 cursor-pointer">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Member" className="w-10 h-10 rounded-full border-2 border-zinc-100 object-cover hover:z-20 hover:scale-110 duration-100" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-zinc-100 bg-zinc-900 flex items-center justify-center text-xs font-bold text-white z-10 hover:scale-110 duration-100">
                +2k
              </div>
            </div>
            <p className="text-xs text-zinc-900 font-bold uppercase tracking-tighter">Active Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

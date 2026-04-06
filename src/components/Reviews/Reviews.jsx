import { 
  Star, 
  Quote,
} from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-zinc-900 relative border-t border-zinc-800">
      <div className="absolute top-0 right-10 text-zinc-800 opacity-20 pointer-events-none">
        <Quote className="w-64 h-64 rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">Member Success</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Don't Just Take <br/> Our Word For It
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Review */}
          <div className="md:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 lg:p-12 flex flex-col justify-between hover:border-lime-400/30 transition-colors">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />)}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                "Switching to BarbellClub was the best decision I've made for my athletic career. The environment forces you to elevate your standards. The equipment is unmatched."
              </h4>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-14 h-14 rounded-full border-2 border-lime-400 object-cover" />
              <div>
                <p className="text-white font-bold uppercase tracking-wider">James Chen</p>
                <p className="text-zinc-400 text-sm">Competitive Powerlifter</p>
              </div>
            </div>
          </div>

          {/* Secondary Review Grid */}
          <div className="flex flex-col gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex-1 flex flex-col justify-between hover:border-lime-400/30 transition-colors">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />)}
                </div>
                <p className="text-zinc-300 font-medium mb-6">"The community here is insane. Everyone is supportive but pushes you past your mental barriers."</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=44" alt="User" className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wider">Maria Silva</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex-1 flex flex-col justify-between hover:border-lime-400/30 transition-colors">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />)}
                </div>
                <p className="text-zinc-300 font-medium mb-6">"Top tier recovery zone. The cold plunges and saunas are exactly what I need post-workout."</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wider">Alex Turner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

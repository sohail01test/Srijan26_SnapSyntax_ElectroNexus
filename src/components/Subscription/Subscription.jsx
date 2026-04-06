import { Check } from 'lucide-react';

export default function Subscription() {
  return (
    <section className="py-24 bg-zinc-950" id="membership">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">Membership</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Elite</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Standard Plan */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-900 transition-all">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Standard</h4>
            <p className="text-zinc-400 text-sm font-medium mb-6">Perfect for self-guided athletes.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white tracking-tighter">₹499</span>
              <span className="text-zinc-500 font-bold uppercase text-sm tracking-wider">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['24/7 Facility Access', 'Free Weights Area', 'Cardio Deck', 'Locker Room Access'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium text-sm">
                  <Check className="text-lime-400 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
              Select Plan
            </button>
          </div>

          {/* Premium Plan (Highlighted) */}
          <div className="bg-lime-400 rounded-3xl p-10 transform lg:-translate-y-4 shadow-2xl shadow-lime-400/10 relative overflow-hidden hover:bg-lime-300 hover:shadow-2xl hover:shadow-lime-900 transition-all">
            <div className="absolute top-0 right-0 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-xl">
              Most Popular
            </div>
            <h4 className="text-xl font-black text-zinc-950 uppercase tracking-tight mb-2">Pro Access</h4>
            <p className="text-zinc-800 text-sm font-bold mb-6">For those serious about results.</p>
            <div className="mb-8">
              <span className="text-6xl font-black text-zinc-950 tracking-tighter">₹899</span>
              <span className="text-zinc-800 font-bold uppercase text-sm tracking-wider">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Everything in Standard', 'Unlimited Group Classes', 'Recovery Zone Access', '1 PT Session / Month', 'Guest Pass (2/month)'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-950 font-bold text-sm">
                  <Check className="text-zinc-950 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-zinc-950 text-white font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-xl">
              Select Pro
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-900 transition-all">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Elite VIP</h4>
            <p className="text-zinc-400 text-sm font-medium mb-6">Complete coaching and recovery.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white tracking-tighter">₹1999</span>
              <span className="text-zinc-500 font-bold uppercase text-sm tracking-wider">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Everything in Pro', 'Weekly PT Sessions', 'Custom Nutrition Plan', 'Unlimited Guest Passes', 'Private Locker'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium text-sm">
                  <Check className="text-lime-400 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
              Select Elite
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

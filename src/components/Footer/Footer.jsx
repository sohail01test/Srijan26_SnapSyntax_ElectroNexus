import { 
  ArrowRight,  
  MapPin, 
  Phone, 
  Mail,  
  Dumbbell
} from 'lucide-react';
import { 
  TwitterX, 
  Instagram,
  Facebook,
} from '@boxicons/react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-0 w-full text-center overflow-hidden pointer-events-none opacity-5">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none text-white block -mb-4 md:-mb-12">
          BARBELLCLUB
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-400 rounded-tl-lg rounded-br-lg flex items-center justify-center transform -skew-x-12">
                <Dumbbell className="text-zinc-950 w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Barbell<span className="text-lime-400">Club</span>
              </span>
            </div>
            <p className="text-zinc-400 font-medium mb-6 max-w-sm">
              Premium fitness facility dedicated to helping you break through plateaus and achieve elite performance.
            </p>
            <div className="flex gap-4">
              {[Instagram, TwitterX, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm font-medium">
                <MapPin className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span>188, Raja S.C. Mallick Road<br/>Kolkata - 700 032</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                <Phone className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span>+91 9836XXXX98</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                <Mail className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span>join@barbellclub.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm font-medium mb-4">Get training tips and exclusive offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-l-xl focus:outline-none focus:border-lime-400 w-full text-sm"
              />
              <button className="bg-lime-400 text-zinc-950 px-4 py-3 rounded-r-xl font-bold hover:bg-lime-300 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BARBELL CLUB. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
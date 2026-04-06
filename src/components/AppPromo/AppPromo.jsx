import { 
  Check,  
  Activity,
  Smartphone,
} from 'lucide-react';

export default function AppPromo () {
  return (
    <section className="bg-lime-400 py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <Activity className="w-[800px] h-[800px] text-zinc-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 uppercase tracking-tighter leading-tight mb-6">
              Track Progress. <br/> Book Classes. <br/> Dominate.
            </h2>
            <p className="text-zinc-800 font-bold max-w-md mb-8">
              Download the BarbellClub app to unlock your digital membership card, schedule personal training, and track your PRs in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-2xl flex items-center gap-3">
                <Smartphone className="w-5 h-5" /> Download iOS
              </button>
              <button className="bg-transparent border-2 border-zinc-950 text-zinc-950 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-colors flex items-center gap-3">
                Download Android
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end relative">
             <div className="w-[300px] h-[600px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-800 p-4 shadow-2xl rotate-12 transform translate-x-12 translate-y-12">
                <div className="w-full h-full border border-zinc-800 rounded-[2rem] overflow-hidden relative">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQpcYDLp8S7eVggtNlNp3ljjbPvRB2FbxCQ&s" alt="App interface mock" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex flex-col justify-end p-6">
                    <div className="w-full h-32 bg-zinc-900/80 backdrop-blur-md rounded-2xl p-4 border border-zinc-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                          <Check className="w-4 h-4 text-zinc-950" />
                        </div>
                        <span className="text-white font-bold text-sm">Workout Complete</span>
                      </div>
                      <p className="text-zinc-400 text-xs">New Personal Record: Deadlift 405lbs</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
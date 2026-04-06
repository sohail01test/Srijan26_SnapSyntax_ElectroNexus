export default function Marquee() {
  const words = ["Unleash Potential", "Push Limits", "No Excuses", "Build Legacy", "Defy Gravity"];
  return (
    <div className="bg-lime-400 py-4 overflow-hidden -rotate-1 scale-105 z-20 relative shadow-xl">
      <div className="animate-marquee">
        {/* Double array to create seamless loop */}
        {[...words, ...words, ...words].map((word, idx) => (
          <span key={idx} className="text-zinc-950 font-black text-2xl uppercase tracking-tighter mx-8 flex-inline items-center gap-8">
            {word}
            <span className="inline-block w-2 h-2 rounded-full bg-zinc-950 ml-8 mb-1"></span>
          </span>
        ))}
      </div>
    </div>
  );
};
import {
    AppPromo,
    Features,
    Footer,
    Hero,
    Marquee,
    Navbar,
    Programs,
    Reviews,
    Subscription,
    Trainers
} from './components/index.js'

// Custom styles for marquee animation and clipping
const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 20s linear infinite;
    }
    .clip-diagonal {
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }
    .text-outline {
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,0.15);
    }
  `}} />
);

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen font-sans selection:bg-lime-400 selection:text-zinc-950">
      <CustomStyles />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Programs />
        <Trainers />
        <Reviews />
        <Subscription />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
}
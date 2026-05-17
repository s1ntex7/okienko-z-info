import React, { useState } from 'react';
import { Target, Users, Map, Swords, Trophy, Activity, Send, Radio, Users2, ArrowRight, BarChart, Crosshair, Hexagon, Zap } from 'lucide-react';

// --- DANE ---
const playerData = {
  nick: "ALEKMISTRZSTRZELA",
  stats: [
    { id: 1, label: "Gole Zdobyte", value: "14", trend: "+2", icon: Target },
    { id: 2, label: "Asysty", value: "0", trend: "-", icon: Users },
    { id: 3, label: "Przebieg (km)", value: "2.9", trend: "+0.3", icon: Map },
    { id: 4, label: "Rozegrane Mecze", value: "0", trend: "-", icon: Swords },
    { id: 5, label: "Tytuły MVP", value: "21", trend: "+4", icon: Trophy },
  ],
  club: {
    name: "POLI",
    tag: "[POLI]",
    points: "12 TBR",
    wl: "4W / 5L"
  }
};

// ============================================================================
// WERSJA 1: MINIMALISTYCZNY SZWAJCARSKI (Premium SaaS Vibe)
// Czystem jasne tła, perfekcyjne proporcje, cienkie linie, ogromna typografia
// ============================================================================
const PremiumMinimal = () => (
  <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-neutral-200/60 w-full">
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12">
      
      {/* Kolumna lewa - Stats */}
      <div className="space-y-12 flex flex-col h-full">
        <header className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0">
            <span className="text-3xl font-light tracking-tighter">AL</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-2">
              {playerData.nick}
            </h1>
            <div className="flex items-center gap-3 text-neutral-500 font-medium">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Online</span>
              <span className="text-neutral-300">•</span>
              <span>Poziom 42</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-neutral-200/60 rounded-3xl overflow-hidden shadow-sm flex-1">
          {playerData.stats.map((stat, i) => (
            <div key={stat.id} className={`bg-white p-8 border-r border-b border-neutral-200/60 flex flex-col justify-between group transition-colors hover:bg-neutral-50 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="flex justify-between items-start mb-12">
                <stat.icon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1.5} />
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-neutral-50 text-neutral-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <div>
                <p className="text-5xl font-light tracking-tighter text-neutral-900 mb-2">{stat.value}</p>
                <p className="text-xs font-semibold tracking-wide uppercase text-neutral-500">{stat.label}</p>
              </div>
            </div>
          ))}
          {/* Filler box by dopełnić siatkę */}
           <div className="bg-neutral-50/50 p-8 border-r border-b border-neutral-200/60 flex items-center justify-center col-span-2 md:col-span-1">
              <BarChart className="w-12 h-12 text-neutral-300 stroke-1" />
           </div>
        </div>
      </div>

      {/* Kolumna prawa - Akcje i Klub */}
      <div className="flex flex-col gap-8 h-full">
        {/* Play Card */}
        <div className="bg-neutral-900 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-neutral-900/20 transition-all cursor-pointer">
          <div className="absolute -right-10 -top-10 text-neutral-800 opacity-50 group-hover:rotate-12 transition-transform duration-700">
            <Hexagon size={200} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 flex flex-col h-full min-h-[160px] justify-between">
            <div className="flex justify-between items-center w-full">
               <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Matchmaking</span>
               <div className="flex gap-1">
                 <span className="w-1 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                 <span className="w-1 h-4 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                 <span className="w-1 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
               </div>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-2">Graj Teraz</h2>
              <p className="text-neutral-400 flex items-center gap-2">The Balls Multiplayer <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></p>
            </div>
          </div>
        </div>

        {/* Club Card */}
        <div className="bg-white rounded-3xl p-8 border border-neutral-200/60 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Twój Klub</p>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">{playerData.club.name}</h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">{playerData.club.tag}</span>
                <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">{playerData.club.wl}</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-400 border border-neutral-100">
               <Users2 className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-end">
             <div className="flex bg-neutral-50 rounded-xl p-1 border border-neutral-200/50">
               <button className="flex-1 py-2 text-sm font-semibold bg-white rounded-lg shadow-sm w-1/2 text-neutral-900">Towarzyski</button>
               <button className="flex-1 py-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors">Oficjalny</button>
             </div>
             
             <div className="relative">
               <input type="text" placeholder="Wprowadź tag rywala..." className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all" />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-900 text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors">
                  <Send className="w-4 h-4" />
               </button>
             </div>

             <button className="w-full py-4 text-sm font-semibold bg-white border border-neutral-200 rounded-xl text-neutral-900 hover:bg-neutral-50 transition-colors">
               Zarządzaj Klubem
             </button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// ============================================================================
// WERSJA 2: NEOBRUTALIZM (Agencja Kreatywna / E-sport)
// Grube obramowania, mocne kolory, agresywne kontrasty, grid architektoniczny
// ============================================================================
const PremiumBrutalist = () => (
  <div className="bg-[#FFD700] rounded-none p-6 md:p-10 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full">
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
      
      {/* Płyta z nazwą */}
      <div className="xl:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end bg-white border-[4px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-6">
         <div>
            <span className="bg-black text-[#FFD700] px-3 py-1 font-mono font-bold text-sm uppercase tracking-widest mb-4 inline-block">Profil Gracza</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none break-all">
              {playerData.nick}
            </h1>
         </div>
         <div className="flex gap-4">
           <div className="text-right hidden sm:block">
             <div className="font-black text-2xl">Lvl 42</div>
             <div className="font-mono text-sm font-bold opacity-70 uppercase">Doświadczenie</div>
           </div>
           <div className="bg-black w-14 h-14 flex items-center justify-center">
             <Crosshair className="text-[#FFD700] w-8 h-8" strokeWidth={3} />
           </div>
         </div>
      </div>

      {/* Grid ze statystykami */}
      <div className="xl:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
         {playerData.stats.map((stat, i) => (
            <div key={stat.id} className={`bg-white border-[4px] border-black p-5 md:p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all ${i === 4 ? 'col-span-2 lg:col-span-1 bg-black text-white' : ''}`}>
               <div className="flex justify-between items-start mb-6">
                 <stat.icon className={`w-8 h-8 ${i === 4 ? 'text-[#FFD700]' : 'text-black'}`} strokeWidth={2.5} />
               </div>
               <div>
                 <p className="text-5xl font-black tracking-tighter mb-1">{stat.value}</p>
                 <p className="text-xs font-mono font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
               </div>
            </div>
         ))}
         {/* Brutalistyczny pusty blok do kompozycji */}
         <div className="bg-white border-[4px] border-black border-dashed flex items-center justify-center p-6 col-span-2 lg:col-span-2">
            <div className="font-mono font-bold text-black/30 tracking-widest uppercase">Miejsce na wykres</div>
         </div>
      </div>

      {/* Prawa kolumna */}
      <div className="xl:col-span-5 flex flex-col gap-6">
        {/* Przycisk GRAJ */}
        <button className="w-full bg-[#FF4500] hover:bg-[#FF5722] text-white border-[4px] border-black p-8 text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group flex flex-col justify-between min-h-[220px]">
           <div className="flex justify-between items-center w-full">
              <span className="font-mono font-bold uppercase tracking-widest bg-black px-3 py-1 text-[#FF4500]">System Gotowy</span>
              <Radio className="w-6 h-6 animate-pulse" />
           </div>
           <div className="flex justify-between items-end w-full mt-8">
             <span className="text-5xl font-black uppercase tracking-tighter group-hover:scale-105 origin-left transition-transform">Graj<br/>Teraz</span>
             <ArrowRight className="w-12 h-12 -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" strokeWidth={3} />
           </div>
        </button>

        {/* Panel Klubu */}
        <div className="bg-white border-[4px] border-black p-6 flex flex-col flex-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
           <div className="flex justify-between items-start mb-8 pb-6 border-b-[4px] border-black">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{playerData.club.name}</h3>
                <span className="font-mono font-bold px-2 py-1 bg-[#FFD700] border-2 border-black inline-block">{playerData.club.tag}</span>
              </div>
              <div className="text-right">
                <div className="font-black text-2xl">{playerData.club.points}</div>
                <div className="font-mono text-sm font-bold opacity-70">W/L: {playerData.club.wl}</div>
              </div>
           </div>
           
           <div className="flex-1 flex flex-col justify-end gap-4 mt-auto">
             <div className="flex gap-2">
               <button className="flex-1 bg-black text-white font-mono font-bold uppercase py-3 border-2 border-black">Towarzyski</button>
               <button className="flex-1 bg-white text-black font-mono font-bold uppercase py-3 border-2 border-black hover:bg-neutral-100">Oficjalny</button>
             </div>
             <div className="flex border-[4px] border-black bg-white group focus-within:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
               <input type="text" placeholder="TAG RYWALA..." className="w-full bg-transparent px-4 py-3 font-mono font-bold uppercase placeholder:text-black/30 outline-none" />
               <button className="bg-[#FFD700] border-l-[4px] border-black px-6 hover:bg-yellow-300">
                  <span className="font-black uppercase">Wyślij</span>
               </button>
             </div>
           </div>
        </div>
      </div>

    </div>
  </div>
);

// ============================================================================
// WERSJA 3: DEEP SPACE GLASSMORPHISM (High-End Gaming / Web3)
// Głęboka czerń, zaawansowane blury, neonowe poświaty, kinowy nastrój
// ============================================================================
const PremiumGlass = () => (
  <div className="relative rounded-[2rem] w-full shrink-0 overflow-hidden bg-[#050505] min-h-[600px] border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,1)]">
    
    {/* Zaawansowane tło z gradientami - "kosmiczny/kinowy" vibe */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute top-[20%] right-[20%] w-[25%] h-[25%] rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 opacity-[0.03] loading-bg-pattern pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    </div>

    <div className="relative z-10 p-8 lg:p-12 w-full h-full flex flex-col">
       <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-[0.2em] text-cyan-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]" /> Player Profile
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tighter">
              {playerData.nick}
            </h1>
          </div>
          <div className="mt-6 md:mt-0 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-6">
             <div className="flex flex-col items-end">
               <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Rank</span>
               <span className="font-bold text-white tracking-wide">Diamond II</span>
             </div>
             <div className="w-[1px] h-8 bg-white/10" />
             <div className="flex flex-col items-end">
               <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Winrate</span>
               <span className="font-bold text-cyan-400 tracking-wide">58.4%</span>
             </div>
          </div>
       </header>

       <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-1">
          
          {/* Lewa strona - Szklane Statystyki */}
          <div className="xl:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
             {playerData.stats.map((stat, i) => (
               <div key={stat.id} className="relative group overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl p-6 transition-all hover:bg-white/[0.04] hover:border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex justify-between items-start mb-8">
                     <div className="p-3 rounded-2xl bg-white/5 text-white/70 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors shadow-inner">
                        <stat.icon className="w-5 h-5" />
                     </div>
                     <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/5 border border-white/5 ${stat.trend.includes('+') ? 'text-cyan-400' : 'text-white/40'}`}>
                        {stat.trend}
                     </span>
                  </div>
                  <div className="relative z-10">
                    <p className="text-4xl text-white font-medium tracking-tight mb-1 font-mono">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-medium">{stat.label}</p>
                  </div>
               </div>
             ))}
             
             {/* Pusta karta dekoracyjna statystyk */}
             <div className="rounded-3xl bg-white/[0.01] border border-white/5 border-dashed backdrop-blur-xl p-8 flex flex-col justify-center items-center col-span-2 md:col-span-1 hidden md:flex opacity-50">
                <Activity className="w-8 h-8 text-white/20 mb-3" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 text-center">Live Telemetry</span>
             </div>
          </div>

          {/* Prawa strona - Interakcje (Graj / Klub) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
             
             {/* Play Now Button - Główny akcent świetlny */}
             <button className="group relative w-full h-40 xl:h-auto xl:flex-1 rounded-3xl p-[1px] overflow-hidden focus:outline-none">
                {/* Animowane obramowanie */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                {/* Wnętrze */}
                <div className="relative h-full bg-[#0a0a0a] rounded-[23px] p-6 md:p-8 flex flex-col justify-between z-10 overflow-hidden">
                   <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-400/20 blur-[40px] group-hover:bg-cyan-400/30 transition-colors" />
                   
                   <div className="flex justify-between items-center z-10">
                     <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-semibold">
                       <Zap className="w-3 h-3" fill="currentColor" /> Ready
                     </span>
                   </div>
                   
                   <div className="flex justify-between items-end z-10 w-full mt-auto">
                     <h2 className="text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">Start<br/>Match</h2>
                     <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                        <ArrowRight strokeWidth={2.5} />
                     </div>
                   </div>
                </div>
             </button>

             {/* Klub Panel */}
             <div className="rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl p-6 md:p-8 flex flex-col shrink-0 min-h-[300px]">
                <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/5">
                   <div>
                     <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">Club Management</span>
                     <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                       {playerData.club.name} <span className="text-xs font-mono font-normal text-white/30">{playerData.club.tag}</span>
                     </h3>
                   </div>
                   <div className="text-right flex flex-col items-end">
                     <span className="text-white font-bold">{playerData.club.points}</span>
                     <span className="text-xs text-white/40">{playerData.club.wl}</span>
                   </div>
                </div>
                
                <div className="space-y-4 flex-1">
                   {/* Switcher Typu Meczu */}
                   <div className="flex p-1 bg-[#0a0a0a] rounded-2xl border border-white/5">
                      <button className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 text-white text-xs font-semibold shadow-sm transition-all text-center">Towarzyski</button>
                      <button className="flex-1 py-2.5 px-4 rounded-xl text-white/40 hover:text-white text-xs font-medium transition-all text-center">Oficjalny</button>
                   </div>
                   
                   {/* Przycisk Akcji i Input */}
                   <div className="flex flex-col gap-2 pt-2">
                     <input type="text" placeholder="ENTER OPPONENT TAG" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-5 py-4 text-xs font-semibold text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 focus:bg-white/5 transition-all outline-none" />
                     <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                        Send Invite <Send className="w-4 h-4" />
                     </button>
                   </div>
                </div>
             </div>
          </div>

       </div>
    </div>
  </div>
);

// ============================================================================
// GŁÓWNY KOMPONENT KONTENEROWY
// ============================================================================
export default function App() {
  const [activeVersion, setActiveVersion] = useState<'minimal' | 'brutalist' | 'glass'>('minimal');

  // Funkcja dobierająca tło aplikacji w zależności od panelu
  const getAppBackground = () => {
    switch (activeVersion) {
      case 'minimal': return 'bg-[#E5E5E5] text-neutral-900';
      case 'brutalist': return 'bg-[#F4F4F4] text-neutral-900';
      case 'glass': return 'bg-[#000000] text-slate-100';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${getAppBackground()}`}>
      
      {/* HEADER NAWIGACYJNY (Narzędzie wyboru) */}
      <header className={`border-b sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ${activeVersion === 'glass' ? 'border-white/10 bg-[#000000]/80 text-white' : 'border-neutral-200/50 bg-white/80'}`}>
        <div className="max-w-[90rem] mx-auto w-full p-4 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Prototypy UI (Premium)</h1>
            <p className={`text-sm ${activeVersion === 'glass' ? 'text-white/50' : 'text-neutral-500'}`}>Estymacja klasy Agency / 3000 PLN</p>
          </div>
          
          <div className={`flex p-1 rounded-xl shadow-sm ${activeVersion === 'glass' ? 'bg-white/5 border border-white/10' : 'bg-neutral-100'}`}>
            <button 
              onClick={() => setActiveVersion('minimal')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeVersion === 'minimal' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'}`}
            >
               Szwajcarski Minimal
            </button>
            <button 
              onClick={() => setActiveVersion('brutalist')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeVersion === 'brutalist' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'}`}
            >
               Neobrutalizm
            </button>
            <button 
              onClick={() => setActiveVersion('glass')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeVersion === 'glass' ? 'bg-[#1a1a1a] shadow-lg text-white ring-1 ring-white/10' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
               Dark Glass (Web3)
            </button>
          </div>
        </div>
      </header>

      {/* GŁÓWNY OBSZAR APLIKACJI */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center overflow-x-hidden">
        <div className="max-w-[90rem] w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 h-full flex flex-col justify-center">
          
          {activeVersion === 'minimal' && <PremiumMinimal />}
          {activeVersion === 'brutalist' && <PremiumBrutalist />}
          {activeVersion === 'glass' && <PremiumGlass />}

        </div>
      </main>

    </div>
  );
}


import React from 'react';
import { Users, Map, Swords, Trophy, Target, ArrowRight, BarChart, Hexagon, Users2, Send } from 'lucide-react';

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
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500 bg-[#E5E5E5] text-neutral-900">
      <main className="flex-1 p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center overflow-x-hidden">
        <div className="max-w-[90rem] w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 h-full flex flex-col justify-center">
          
          <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-neutral-200/60 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12">
              
              {/* Kolumna lewa - Stats */}
              <div className="space-y-12 flex flex-col h-full">
                <header className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm">
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-neutral-200/60 rounded-3xl overflow-hidden shadow-sm flex-1 bg-white">
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
                <div className="bg-neutral-900 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-neutral-900/40 transition-all cursor-pointer">
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
                <div className="bg-white rounded-3xl p-8 border border-neutral-200/60 flex-1 flex flex-col shadow-sm">
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
                       <button className="flex-1 py-2 text-sm font-semibold bg-white rounded-lg shadow-sm text-neutral-900">Towarzyski</button>
                       <button className="flex-1 py-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors">Oficjalny</button>
                     </div>
                     
                     <div className="relative">
                       <input type="text" placeholder="Wprowadź tag rywala..." className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all outline-none" />
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

        </div>
      </main>
    </div>
  );
}


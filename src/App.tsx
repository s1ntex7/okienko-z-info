import React, { useState } from 'react';
import { Users, Map, Swords, Trophy, Target, ArrowRight, BarChart, Hexagon, Users2, Send, Crown, Shield, Handshake, TrendingUp, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- DANE Gracza ---
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

// --- DANE Rankingów ---
const clubsData = {
  official: {
    title: "Top Kluby",
    unit: "TBR",
    buttonText: "Ranking TBR Drużyn",
    list: [
      { id: "c1", rank: 1, tag: "[1505]", name: "1505", points: "10 030" },
      { id: "c2", rank: 2, tag: "[POLI]", name: "pOLI", points: "10 011" },
      { id: "c3", rank: 3, tag: "[CIUL]", name: "The Ciule", points: "10 000" }
    ]
  },
  friendly: {
    title: "Najlepsi w Sparingach",
    unit: "PKT",
    buttonText: "Ranking PKT Drużyn",
    list: [
      { id: "c4", rank: 1, tag: "[PATO]", name: "Pato Squad", points: "4 502" },
      { id: "c2", rank: 2, tag: "[POLI]", name: "pOLI", points: "4 200" },
      { id: "c5", rank: 3, tag: "[FUN]", name: "Just For Fun", points: "3 890" }
    ]
  }
};

const scorersData = {
  total: {
    title: "Gole",
    unit: "GOLI",
    list: [
      { id: "s1", rank: 1, country: "pl", name: "alicja", tag: "[CIUL]", value: "305" },
      { id: "s2", rank: 2, country: "pl", name: "alekmistrzstrzela", tag: "[POLI]", value: "14", isCurrentUser: true },
      { id: "s3", rank: 3, country: "pl", name: "2112adobe2", tag: "[1505]", value: "7" }
    ]
  },
  avg: {
    title: "Średnia z Meczu",
    unit: "GOLI",
    list: [
      { id: "s4", rank: 1, country: "pl", name: "proGamer", tag: "[PRO]", value: "3.2", matches: 10, totalGoals: 32 },
      { id: "s2", rank: 2, country: "pl", name: "alekmistrzstrzela", tag: "[POLI]", value: "2.1", isCurrentUser: true, matches: 15, totalGoals: 31 },
      { id: "s1", rank: 3, country: "pl", name: "alicja", tag: "[CIUL]", value: "1.8", matches: 42, totalGoals: 75 }
    ]
  },
  max: {
    title: "Najwięcej w Meczu",
    unit: "GOLI",
    list: [
      { id: "s1", rank: 1, country: "pl", name: "alicja", tag: "[CIUL]", value: "12" },
      { id: "s5", rank: 2, country: "pl", name: "destroyer", tag: "[BOOM]", value: "8" },
      { id: "s2", rank: 3, country: "pl", name: "alekmistrzstrzela", tag: "[POLI]", value: "5", isCurrentUser: true }
    ]
  }
};

export default function App() {
  const [clubTab, setClubTab] = useState<'official' | 'friendly'>('official');
  const [scorerTab, setScorerTab] = useState<'total' | 'avg' | 'max'>('total');

  const currentClubData = clubsData[clubTab];
  const currentScorerData = scorersData[scorerTab];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500 bg-[#E5E5E5] text-neutral-900 pb-12">
      <main className="flex-1 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center justify-start overflow-x-hidden pt-8 md:pt-16">
        <div className="max-w-[90rem] w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col gap-8">
          
          {/* --- GŁÓWNY PANEL GRACZA --- */}
          <div className="bg-[#FAFAFA] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-neutral-200/60 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12">
              
              {/* Kolumna lewa - Profil i Statystyki */}
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

          {/* --- TABELE RANKINGOWE --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Top Kluby Tabela */}
            <div className="bg-[#FAFAFA] rounded-3xl p-8 lg:p-10 border border-neutral-200/60 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">TBR Ranking</p>
                  <motion.h3 
                    key={clubTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-semibold tracking-tight text-neutral-900"
                  >
                    {currentClubData.title}
                  </motion.h3>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setClubTab('official')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${clubTab === 'official' ? 'bg-amber-50 text-amber-500' : 'bg-neutral-100 text-neutral-400 hover:text-neutral-600'}`}
                    title="Mecze Oficjalne (TBR)"
                  >
                    <Shield className="w-5 h-5 hidden" />
                    <Crown className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setClubTab('friendly')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${clubTab === 'friendly' ? 'bg-blue-50 text-blue-500' : 'bg-neutral-100 text-neutral-400 hover:text-neutral-600'}`}
                    title="Mecze Towarzyskie"
                  >
                    <Handshake className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={clubTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentClubData.list.map((club, i) => (
                      <div key={club.id} className={`flex justify-between items-center py-5 ${i !== currentClubData.list.length - 1 ? 'border-b border-neutral-200/60' : ''} group`}>
                        <div className="flex items-center gap-4">
                          <div className="w-8 font-semibold text-neutral-400">#{club.rank}</div>
                          <div>
                            <div className="mb-0.5">
                              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">{club.tag}</span>
                            </div>
                            <div className="text-lg font-semibold text-neutral-900">{club.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-light tracking-tighter ${club.rank === 1 ? 'text-amber-500 font-medium' : 'text-neutral-900'}`}>{club.points}</div>
                          <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">{currentClubData.unit}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button className="w-full mt-8 py-4 text-sm font-semibold bg-white border border-neutral-200 rounded-xl text-neutral-900 hover:bg-neutral-50 transition-colors">
                {currentClubData.buttonText}
              </button>
            </div>

            {/* Top Strzelcy Tabela */}
            <div className="bg-[#FAFAFA] rounded-3xl p-8 lg:p-10 border border-neutral-200/60 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Top Strzelcy</p>
                  <motion.h3 
                    key={scorerTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-semibold tracking-tight text-neutral-900 uppercase"
                  >
                    {currentScorerData.title}
                  </motion.h3>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setScorerTab('total')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${scorerTab === 'total' ? 'bg-amber-50 text-amber-500' : 'bg-neutral-100 text-neutral-400 hover:text-neutral-600'}`}
                    title="Całkowita liczba goli"
                  >
                    <Target className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setScorerTab('avg')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${scorerTab === 'avg' ? 'bg-blue-50 text-blue-500' : 'bg-neutral-100 text-neutral-400 hover:text-neutral-600'}`}
                    title="Średnia goli na mecz"
                  >
                    <TrendingUp className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setScorerTab('max')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${scorerTab === 'max' ? 'bg-red-50 text-red-500' : 'bg-neutral-100 text-neutral-400 hover:text-neutral-600'}`}
                    title="Najwięcej goli w jednym meczu"
                  >
                    <Flame className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scorerTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentScorerData.list.map((scorer, i) => (
                      <div key={scorer.id} className={`flex justify-between items-center py-5 ${i !== currentScorerData.list.length - 1 ? 'border-b border-neutral-200/60' : ''} group`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-6 font-semibold text-xl ${scorer.rank === 1 ? 'text-amber-500' : 'text-neutral-400'}`}>{scorer.rank}.</div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              {/* Lepsza flaga PL */}
                              <div className="w-5 h-3.5 flex flex-col rounded-[2px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-neutral-200/80 shrink-0">
                                 <div className="bg-white flex-1" />
                                 <div className="bg-[#DC143C] flex-1" />
                              </div>
                              <span className="text-lg font-semibold text-neutral-900">{scorer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">{scorer.tag}</span>
                              {/* @ts-ignore */}
                              {scorer.matches && (
                                <>
                                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                  <span className="text-[10px] font-medium text-neutral-500">{/* @ts-ignore */}{scorer.matches} meczy</span>
                                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                  <span className="text-[10px] font-medium text-neutral-500">{/* @ts-ignore */}{scorer.totalGoals} goli</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-light tracking-tighter 
                            ${scorer.rank === 1 ? 'text-amber-500 font-medium' : 
                              scorer.isCurrentUser ? 'text-blue-500 font-medium' : 'text-neutral-900'}
                          `}>
                            {scorer.value}
                          </div>
                          <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">{currentScorerData.unit}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button className="w-full mt-8 py-4 text-sm font-semibold bg-white border border-neutral-200 rounded-xl text-neutral-900 hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
                Pełna Tabela <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

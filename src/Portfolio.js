import React from "react";
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

const projects = [
  { id: 1, title: "Commercial Demo Reel", description: "A fast‑paced commercial edit highlighting brand identity and emotion.", src: "#" },
  { id: 2, title: "Music Video — Neon Lights", description: "Aesthetic, color‑driven storytelling through stylized camera movements.", src: "#" },
  { id: 3, title: "Documentary — Roots of Rhythm", description: "Human‑focused narrative exploring culture, sound, and memory.", src: "#" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <FloatingActionButtons />

      {/* Hero Section - Full Screen Video */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          {/* Gradient Fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 animate-fadeInUp">
          <div className="mb-6">
            <picture>
              <source srcSet="/bambi-title.webp" type="image/webp" />
              <img
                src="/bambi-title.png"
                alt="Bambi — Visuals"
                className="mx-auto w-64 md:w-[30rem] object-contain drop-shadow-2xl"
                loading="eager"
              />
            </picture>
          </div>
          <p className="text-xl md:text-2xl text-white/90 italic font-light tracking-wide text-balance drop-shadow-md">
            A gentle, poetic and unforgettable visual signature.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/70">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-b from-black via-orange-950/30 to-green-950/30">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 space-y-32">

          {/* Showreel Section */}
          <section className="max-w-5xl mx-auto">
            <div className="w-full aspect-video rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden relative group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-green-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <img
                src="/bambi-title.png"
                alt="Showreel Cover"
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
            </div>
          </section>

          {/* Featured Projects */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <div key={p.id} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="aspect-video bg-neutral-900/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white font-medium tracking-wide flex items-center gap-2">
                        Watch Project
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-neutral-700 group-hover:scale-110 transition-transform duration-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About the Videographer</h2>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed text-balance font-light">
              Bambi is a visual storyteller specializing in evocative short-form and documentary work. With a background in cinematography and editing, our approach blends atmospheric lighting, cinematic pacing, and an attention to emotional detail.
            </p>
          </section>

          {/* Explore More */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8 text-neutral-400 uppercase tracking-widest text-sm">Explore More</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="#/about" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white">About Page</a>
              <a href="#/discover" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white">Discover</a>
              <a href="#/client-feedback" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white">Client Feedback</a>
            </div>
          </section>

          {/* Contact */}
          <section className="max-w-4xl mx-auto text-center pb-20">
            <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-neutral-400 mb-8 text-lg">For collaborations, bookings, or inquiries.</p>
            <a
              href="mailto:info@bambi-productions.com"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors border-b-2 border-orange-500/30 hover:border-orange-400 pb-1"
            >
              info@bambi-productions.com
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
              </svg>
            </a>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
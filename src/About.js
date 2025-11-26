import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

export default function About() {



  return (
    <div className="min-h-screen text-white p-6 md:p-12 bg-gradient-to-b from-black via-orange to-green">
      <Header />
      <FloatingActionButtons />

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        <main className="max-w-4xl mx-auto">

          <header className="mb-8 text-center">

            <div className="mb-3 relative z-10">
              <a href="/" className="inline-block">
                <picture>
                  <source srcSet="/bambi-title.webp" type="image/webp" />
                  <img
                    src="/bambi-title.png"
                    alt="Bambi — Visuals"
                    className="mx-auto w-56 md:w-96 object-contain"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Who is Bambi ?</h1>
          </header>

          <section className="prose prose-invert text-neutral-300 max-w-none">
            <p className="text-lg leading-relaxed text-balance">
              Bambi is a <b>visual storyteller</b> specializing in evocative short-form and documentary&nbsp;work.
              <br /> <br />
              With a background in cinematography and editing, our approach blends atmospheric lighting, cinematic pacing, and an attention to <b>emotional detail</b>, delivering <b>unforgettable and appealing&nbsp;visuals</b>.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Philosophy</h3>
            <p className="text-lg leading-relaxed text-balance">
              The work favors quiet moments and natural emotion — building to striking images that linger. Each
              project is approached with a tailored visual language that supports the subject, brand, or&nbsp;narrative.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Selected Experience</h3>
            <ul className="text-lg leading-relaxed list-disc pl-5 space-y-2 marker:text-orange-500">
              <li>Commercials for lifestyle and consumer&nbsp;brands</li>
              <li>Music videos collaborating with directors and&nbsp;colorists</li>
              <li>Documentary shorts with a focus on music and cultural&nbsp;subjects</li>
            </ul>
            <br />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

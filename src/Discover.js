import React, { useState } from 'react';
import Header from './Header';
import ContactFormWidget from './ContactFormWidget';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

export default function Discover() {
    const [showMobileForm, setShowMobileForm] = useState(false);

    const services = [
        {
            title: 'Commercials',
            description: 'Brand storytelling through cinematic visuals that capture attention and drive emotion.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
            )
        },
        {
            title: 'Music Videos',
            description: 'Aesthetic-driven narratives that blend rhythm, color, and movement into unforgettable visuals.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: 'Documentaries',
            description: 'Human-focused storytelling that explores culture, emotion, and the moments that matter.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
            )
        },
        {
            title: 'Event Coverage',
            description: 'Capturing the energy and atmosphere of live events with dynamic, engaging footage.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen text-white bg-gradient-to-b from-black via-orange to-green">
            <Header />
            <FloatingActionButtons />

            {/* Desktop/Tablet Split Layout */}
            <div className="hidden md:flex pt-20 h-screen">
                {/* Left Side - Fixed Form */}
                <div className="w-2/5 p-6 overflow-hidden">
                    <div className="h-full">
                        <ContactFormWidget compact={false} />
                    </div>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="w-3/5 overflow-y-auto p-6 pb-20 no-scrollbar">
                    <div className="max-w-4xl">
                        {/* Hero Section */}
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Our Work</h1>
                            <p className="text-lg text-neutral-300 leading-relaxed text-balance">
                                We specialize in creating visual stories that resonate. From commercials to documentaries,
                                every project is crafted with attention to detail and emotional&nbsp;depth.
                            </p>
                        </header>

                        {/* Services Grid */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            background: 'rgba(0,0,0,0.4)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        <div className="text-orange-400 mb-4">{service.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-neutral-300 text-sm leading-relaxed text-balance">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Process Section */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-semibold mb-6">Our Process</h2>
                            <div className="space-y-4">
                                {[
                                    { step: '01', title: 'Discovery', desc: 'We start by understanding your vision, goals, and audience.' },
                                    { step: '02', title: 'Concept', desc: 'Developing a creative direction that aligns with your brand story.' },
                                    { step: '03', title: 'Production', desc: 'Capturing stunning visuals with professional equipment and techniques.' },
                                    { step: '04', title: 'Post-Production', desc: 'Editing, color grading, and sound design to perfect the final piece.' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-5 rounded-xl"
                                        style={{
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <div className="text-4xl font-bold text-orange-500/30">{item.step}</div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                            <p className="text-neutral-300 text-sm leading-relaxed text-balance">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-20 p-6 pb-24">
                {/* Hero Section */}
                <header className="mb-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">Discover Our Work</h1>
                    <p className="text-base text-neutral-300">
                        We specialize in creating visual stories that resonate. From commercials to documentaries,
                        every project is crafted with attention to detail and emotional depth.
                    </p>
                </header>

                {/* Services Grid */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">What We Do</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-6 transition-all duration-300"
                                style={{
                                    background: 'rgba(0,0,0,0.4)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                }}
                            >
                                <div className="text-orange-400 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-neutral-300 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Process</h2>
                    <div className="space-y-4">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We start by understanding your vision, goals, and audience.' },
                            { step: '02', title: 'Concept', desc: 'Developing a creative direction that aligns with your brand story.' },
                            { step: '03', title: 'Production', desc: 'Capturing stunning visuals with professional equipment and techniques.' },
                            { step: '04', title: 'Post-Production', desc: 'Editing, color grading, and sound design to perfect the final piece.' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-xl"
                                style={{
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <div className="text-3xl font-bold text-orange-500/30">{item.step}</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                    <p className="text-neutral-300 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />
            </div>

            {/* Mobile Fixed Bottom Button */}
            <button
                onClick={() => setShowMobileForm(true)}
                className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(220,38,38,0.95), rgba(234,88,12,0.95))',
                    border: '1px solid rgba(220,38,38,0.4)',
                    boxShadow: '0 8px 32px rgba(220,38,38,0.6)'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Contact Us
            </button>

            {/* Mobile Form Modal */}
            {showMobileForm && (
                <div className="md:hidden fixed inset-0 z-50 flex items-end">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowMobileForm(false)}
                    />

                    {/* Modal */}
                    <div
                        className="relative w-full bg-gradient-to-b from-black via-orange to-green rounded-t-3xl p-6 max-h-[85vh] overflow-hidden flex flex-col"
                        style={{
                            boxShadow: '0 -8px 32px rgba(0,0,0,0.6)'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowMobileForm(false)}
                            className="absolute top-4 right-4 text-white p-2 rounded-lg transition-all"
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Form */}
                        <div className="flex-1 overflow-hidden">
                            <ContactFormWidget compact={false} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

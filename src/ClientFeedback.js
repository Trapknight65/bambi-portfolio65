import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import FeedbackFormWidget from './FeedbackFormWidget';

export default function ClientFeedback() {
    const [showMobileForm, setShowMobileForm] = useState(false);

    const testimonials = [
        {
            name: 'Sofia Martinez',
            role: 'Creative Director, Brand Studio',
            feedback: 'Working with Bambi was an absolute pleasure. The attention to detail and creative vision brought our brand story to life in ways we never imagined.',
            rating: 5,
            image: '👩‍💼'
        },
        {
            name: 'João Silva',
            role: 'Music Artist',
            feedback: 'The music video exceeded all expectations. The visuals perfectly captured the mood and energy of the track. Truly professional work.',
            rating: 5,
            image: '🎤'
        },
        {
            name: 'Emma Thompson',
            role: 'Event Coordinator',
            feedback: 'Bambi captured our event beautifully. The footage was dynamic, engaging, and told the story of the day perfectly. Highly recommend!',
            rating: 5,
            image: '👩‍💻'
        },
        {
            name: 'Carlos Rodrigues',
            role: 'Documentary Producer',
            feedback: 'The cinematography and storytelling were exceptional. Bambi has a unique ability to find the emotional core of every scene.',
            rating: 5,
            image: '🎬'
        },
        {
            name: 'Ana Costa',
            role: 'Marketing Manager',
            feedback: 'Our commercial campaign was a huge success thanks to the stunning visuals. The team was professional, creative, and easy to work with.',
            rating: 5,
            image: '💼'
        },
        {
            name: 'Miguel Santos',
            role: 'Independent Filmmaker',
            feedback: 'Incredible work ethic and artistic vision. The final product was polished, cinematic, and exactly what we needed.',
            rating: 5,
            image: '🎥'
        }
    ];

    return (
        <div className="min-h-screen text-white bg-gradient-to-b from-black via-orange to-green">
            <Header />
            <FloatingActionButtons />

            {/* Desktop Split Layout */}
            <div className="hidden md:flex h-screen pt-20">
                {/* Left Side - Scrollable Content */}
                <div className="w-3/5 overflow-y-auto p-12 no-scrollbar">
                    <main className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <header className="mb-16 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Client Feedback</h1>
                            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto text-balance">
                                Don't just take our word for it. Here's what our clients have to say about working with&nbsp;us.
                            </p>
                        </header>

                        {/* Testimonials Grid */}
                        <section className="mb-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                                        style={{
                                            background: 'rgba(0,0,0,0.4)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {/* Rating Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5 text-orange-400"
                                                >
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Feedback */}
                                        <p className="text-neutral-300 mb-6 flex-grow italic text-lg leading-relaxed text-balance">"{testimonial.feedback}"</p>

                                        {/* Client Info */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                            <div className="text-4xl">{testimonial.image}</div>
                                            <div>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-neutral-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="mb-20">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { number: '50+', label: 'Projects Completed' },
                                    { number: '40+', label: 'Happy Clients' },
                                    { number: '5★', label: 'Average Rating' },
                                    { number: '100%', label: 'Client Satisfaction' }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-6 rounded-xl"
                                        style={{
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                                        <div className="text-neutral-300 text-sm md:text-base text-balance">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section - Restored */}
                        <section className="text-center py-16">
                            <h2 className="text-3xl font-semibold mb-4 text-balance">Want to Be Our Next Success&nbsp;Story?</h2>
                            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
                                Join our growing list of satisfied clients and let's create something amazing&nbsp;together.
                            </p>
                            <a
                                href="#/contact-form"
                                className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                                    border: '1px solid rgba(220,38,38,0.4)',
                                    boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                                }}
                            >
                                Start Your Project
                            </a>
                        </section>

                        <Footer />
                    </main>
                </div>

                {/* Right Side - Fixed Form */}
                <div className="w-2/5 relative flex items-center justify-center p-8 border-l border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="w-full max-w-xl">
                        <FeedbackFormWidget />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-20 p-6 pb-24">
                <main className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <header className="mb-12 text-center">
                        <h1 className="text-3xl font-bold mb-4">Client Feedback</h1>
                        <p className="text-base text-neutral-300">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </header>

                    {/* Testimonials Grid */}
                    <section className="mb-12">
                        <div className="grid grid-cols-1 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl p-6 transition-all duration-300"
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 text-orange-400"
                                            >
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Feedback */}
                                    <p className="text-neutral-300 mb-6 flex-grow italic">"{testimonial.feedback}"</p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <div className="text-4xl">{testimonial.image}</div>
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-neutral-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-12">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: '50+', label: 'Projects Completed' },
                                { number: '40+', label: 'Happy Clients' },
                                { number: '5★', label: 'Average Rating' },
                                { number: '100%', label: 'Client Satisfaction' }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 rounded-xl"
                                    style={{
                                        background: 'rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                                    <div className="text-neutral-300 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section - Restored Mobile */}
                    <section className="text-center py-8">
                        <h2 className="text-2xl font-semibold mb-4">Want to Be Our Next Success Story?</h2>
                        <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                            Join our growing list of satisfied clients and let's create something amazing together.
                        </p>
                        <a
                            href="#/contact-form"
                            className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                                border: '1px solid rgba(220,38,38,0.4)',
                                boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                            }}
                        >
                            Start Your Project
                        </a>
                    </section>
                </main>
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
                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.387 17.387 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.165 17.165 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                </svg>
                Leave Feedback
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
                        <div className="flex-1 overflow-y-auto no-scrollbar">
                            <FeedbackFormWidget />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

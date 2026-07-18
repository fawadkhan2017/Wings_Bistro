function Testimonials() {
    try {
        const reviews = [
            { name: "Sarah M.", loc: "Toronto, ON", text: "The best wings in town! The sauces are amazing and always fresh. Never had a bad experience.", avatar: "../assets/images/team-2.jpeg" },
            { name: "Jason T.", loc: "Vancouver, BC", text: "Honey Garlic is our go-to! Always fresh, always delicious. The delivery is always incredibly fast too.", avatar: "../assets/images/team-3.jpeg" },
            { name: "Priya K.", loc: "Calgary, AB", text: "Love the bold flavors and the fast delivery. Highly recommend! The lemon pepper is out of this world.", avatar: "../assets/images/team-4.jpeg"},
        ]

        return (
            <section className="section-padding-4x bg-[#050505]" data-name="testimonials" data-file="components/Testimonials.js">
                <div className="container-custom">
                    <div className="text-center mb-16 flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="hidden md:flex flex-col gap-1.5" aria-hidden="true">
                            <div className="h-[2px] w-8 bg-[var(--primary)]"></div>
                            <div className="h-[2px] w-12 bg-[var(--primary)]"></div>
                            <div className="h-[2px] w-8 bg-[var(--primary)]"></div>
                        </div>
                        <h2 className="heading-2 m-0 text-center">
                            WHAT OUR CUSTOMERS SAY
                        </h2>
                        <div className="hidden md:flex flex-col gap-1.5 items-end" aria-hidden="true">
                            <div className="h-[2px] w-8 bg-[var(--primary)]"></div>
                            <div className="h-[2px] w-12 bg-[var(--primary)]"></div>
                            <div className="h-[2px] w-8 bg-[var(--primary)]"></div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-4 lg:gap-8">
                        <button className="hidden lg:flex w-12 h-12 rounded-full border-2 border-[var(--primary)] items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[#050505]" aria-label="Previous testimonials">
                            <div className="icon-chevron-left text-2xl" aria-hidden="true"></div>
                        </button>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 w-full">
                            {reviews.map((review, i) => (
                                <div key={i} className={`bg-[#0f0f0f] p-8 lg:p-10 rounded-xl border border-white/10 shadow-lg flex flex-col h-full hover:border-[var(--primary)]/30 transition-colors ${i === 2 ? 'hidden lg:flex' : 'flex'}`}>
                                    <div className="flex gap-1.5 mb-6" aria-label="5 out of 5 stars">
                                        {[...Array(5)].map((_, j) => (
                                            <div key={j} className="icon-star text-[var(--primary)] text-xl fill-[var(--primary)]" aria-hidden="true"></div>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-base lg:text-lg mb-8 flex-grow leading-relaxed italic">"{review.text}"</p>
                                    <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/5">
                                        <img src={review.avatar} alt={`${review.name} avatar`} className="w-14 h-14 rounded-full object-cover border-2 border-[var(--primary)]/20" />
                                        <div>
                                            <div className="text-white font-bold tracking-wide uppercase text-sm">{review.name}</div>
                                            <div className="text-[var(--primary)] font-medium text-xs tracking-wider uppercase mt-1">{review.loc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button className="hidden lg:flex w-12 h-12 rounded-full border-2 border-[var(--primary)] items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[#050505]" aria-label="Next testimonials">
                            <div className="icon-chevron-right text-2xl" aria-hidden="true"></div>
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-12" aria-hidden="true">
                        <div className="w-8 h-1.5 bg-[var(--primary)] rounded-full"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials error:', error);
        return null;
    }
}
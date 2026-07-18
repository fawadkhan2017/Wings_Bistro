function Newsletter() {
    try {
        return (
            <section className="bg-[var(--primary)] py-16 lg:py-20 relative overflow-hidden" data-name="newsletter" data-file="components/Newsletter.js" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dust.png")', backgroundBlendMode: 'multiply' }}>
                <div className="container-custom relative z-10">
                    <div className="bg-[#0a0a0a] rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                            
                            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 w-full lg:w-[45%]">
                                <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="icon-mail text-4xl text-[var(--primary)]" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-2 tracking-wide">STAY IN THE LOOP</h2>
                                    <p className="text-gray-400 font-medium text-base lg:text-lg">Get exclusive offers and new menu drops!</p>
                                </div>
                            </div>
                            
                            <form className="w-full lg:w-[55%] flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                                <label htmlFor="email-input" className="sr-only">Email address</label>
                                <input 
                                    id="email-input"
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="px-6 py-4 rounded font-medium bg-white text-gray-900 w-full flex-1 focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50 text-base"
                                    required
                                />
                                <button type="submit" className="bg-[var(--primary)] text-black hover:bg-[var(--primary-hover)] font-heading font-bold uppercase tracking-wider px-10 py-4 rounded transition-colors whitespace-nowrap text-lg focus:outline-none focus:ring-2 focus:ring-white">
                                    SUBSCRIBE
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Newsletter error:', error);
        return null;
    }
}
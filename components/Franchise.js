function Franchise() {
    try {
        return (
            <section id="franchise" className="section-padding-4x bg-[#050505] relative overflow-hidden border-t border-white/5" data-name="franchise" data-file="components/Franchise.js">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-12 lg:gap-8">
                        
                        {/* Left Column */}
                        <div className="w-full lg:w-[32%] flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                            <span className="heading-subtitle">FRANCHISE</span>
                            <h2 className="heading-2 mb-6">
                                BE PART OF OUR<br/>GROWING FAMILY
                            </h2>
                            <p className="body-text mb-10 max-w-sm mx-auto lg:mx-0">
                                Join a brand that people love and a business that's built to grow. Full support. Proven model. Let's build success together.
                            </p>
                            <div>
                                <button className="btn btn-primary btn-lg w-full sm:w-auto">
                                    LEARN ABOUT FRANCHISE
                                    <div className="icon-arrow-right text-lg" aria-hidden="true"></div>
                                </button>
                            </div>
                        </div>
                        
                        {/* Center Column (Image) */}
                        <div className="w-full lg:w-[40%] flex justify-center items-center order-1 lg:order-2">
                            <div className="w-full max-w-md lg:max-w-lg relative">
                                <img src="../assets/images/f80d6701-268c-4c77-a347-1f7569b785c1.png" alt="The Wings Bistro Storefront" className="w-full h-auto object-contain drop-shadow-2xl" />
                            </div>
                        </div>
                        
                        {/* Right Column (Checklist) */}
                        <div className="w-full lg:w-[28%] flex flex-col justify-center gap-8 order-3 lg:order-3">
                            {[
                                { title: 'PROVEN BUSINESS MODEL', desc: 'Turnkey operations' },
                                { title: 'TRAINING & SUPPORT', desc: "We're with you all the way" },
                                { title: 'MARKETING ASSISTANCE', desc: 'Local & national support' },
                                { title: 'GROW YOUR FUTURE', desc: 'Build your legacy' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="icon-circle-check text-[var(--primary)] text-xl" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h5 className="font-heading font-bold text-white text-xl tracking-wide uppercase mb-1">{item.title}</h5>
                                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Franchise component error:', error);
        return null;
    }
}
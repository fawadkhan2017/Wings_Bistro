function Story() {
    try {
        return (
            <section id="story" className="section-padding-none bg-[#0b0b0b] border-t border-white/10" data-name="story" data-file="components/Story.js">
                <div className="max-w-[1400px] mx-auto pr-4 sm:pr-6 lg:pr-8 pl-0">
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
                        <div className="w-full lg:w-[45%] flex">
                            <img src="../assets/images/81ce1c48-f27c-4b2b-a4f3-6aa7357e3bac.png" alt="Chef cooking with fire" className="w-full h-64 sm:h-96 lg:h-full object-cover lg:rounded-r-xl shadow-2xl" />
                        </div>
                        <div className="w-full lg:w-[55%] flex flex-col justify-center py-6 px-4 lg:px-0">
                            <span className="heading-subtitle">Our Story</span>
                            <h2 className="heading-2 mb-6">
                                Built on flavor.<br/>Driven by passion.
                            </h2>
                            <p className="body-text mb-12 max-w-2xl">
                                The Wings Bistro wasn't born in a boardroom. It started in our kitchen with a simple belief — wings should be bold, honest and unforgettable. We hand-toss each wing, craft our sauces in-house and never cut corners. It's our promise to you.
                            </p>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <div className="icon-award text-[var(--primary)] text-2xl" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1.5 leading-snug">Premium<br/>Chicken</h4>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Always high quality</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <div className="icon-flask-conical text-[var(--primary)] text-2xl" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1.5 leading-snug">12+ Signature<br/>Sauces</h4>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Made in-house</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <div className="icon-flame text-[var(--primary)] text-2xl" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1.5 leading-snug">Hand-Tossed<br/>To Order</h4>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Never sitting around</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <div className="icon-heart text-[var(--primary)] text-2xl" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1.5 leading-snug">Made With<br/>Passion</h4>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">In every bite</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Story component error:', error);
        return null;
    }
}
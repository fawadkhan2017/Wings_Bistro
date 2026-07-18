function Catering() {
    try {
        return (
            <section id="catering" className="section-padding-4x bg-[#0b0b0b] border-t border-white/10" data-name="catering" data-file="components/Catering.js">
                <div className="max-w-[1400px] mx-auto pr-4 sm:pr-6 lg:pr-8 pl-0">
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
                        <div className="w-full lg:w-[45%] flex">
                            <img src="../assets/images/858c530a-12ce-44b8-a97b-bbecc7e3a1c3.png" alt="Catering services" className="w-full h-64 sm:h-96 lg:h-full object-cover lg:rounded-r-xl shadow-2xl" />
                        </div>
                        <div className="w-full lg:w-[55%] flex flex-col justify-center py-6 px-4 lg:px-0">
                            <span className="heading-subtitle">Catering</span>
                            <h2 className="heading-2 mb-6">
                                Perfect for any occasion
                            </h2>
                            <p className="body-text mb-12 max-w-2xl">
                                From small get-togethers to big events, we've got you covered. Choose from a variety of catering packages and let us bring the flavor to your table.
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group cursor-default">
                                    <div className="icon-users text-[var(--primary)] text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mt-1">Parties</h4>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group cursor-default">
                                    <div className="icon-briefcase text-[var(--primary)] text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mt-1">Corporate<br/>Events</h4>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group cursor-default">
                                    <div className="icon-cake text-[var(--primary)] text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mt-1">Birthdays</h4>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group cursor-default">
                                    <div className="icon-dribbble text-[var(--primary)] text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mt-1">Game Day</h4>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group cursor-default">
                                    <div className="icon-ellipsis text-[var(--primary)] text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mt-1">And More</h4>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <button className="btn btn-outline-primary btn-lg w-full sm:w-auto">
                                    View Catering Menu 
                                    <div className="icon-arrow-right" aria-hidden="true"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Catering component error:', error);
        return null;
    }
}
function Menu() {
    const sliderRef = React.useRef(null);
    
    const wings = [
        {
            id: 1,
            name: 'HONEY GARLIC',
            price: '$13.49',
            desc: 'Sweet, savory and absolutely addictive.',
            image: '../assets/images/55a0dd51-a62b-4bba-9921-c114fc5b545c.png',
            tag: 'BEST SELLER',
            spicy: 1
        },
        {
            id: 2,
            name: 'HOT BUFFALO',
            price: '$13.49',
            desc: 'Classic hot sauce with the perfect kick.',
            image: '../assets/images/3196cd99-a6b8-49cd-94e2-825f56e691f5.png',
            spicy: 3
        },
        {
            id: 3,
            name: 'BBQ SMOKE',
            price: '$12.99',
            desc: 'Smoky, rich and finger licking good.',
            image: '../assets/images/55a0dd51-a62b-4bba-9921-c114fc5b545c.png',
            spicy: 2
        },
        {
            id: 4,
            name: 'LEMON PEPPER',
            price: '$12.99',
            desc: 'Zesty, crispy and full of flavor.',
            image: '../assets/images/0507e015-211c-4087-b1ec-29e8848e7e37.png',
            spicy: 1
        }
    ];

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 340; // Card width + gap
            sliderRef.current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };
    
    return (
        <section id="menu" className="section-padding-tp bg-black relative border-t border-white/5" data-name="menu" data-file="components/Menu.js">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                    
                    {/* Left Column - Heading & Info */}
                    <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left pt-2">
                        <h2 className="heading-2 italic tracking-wide mb-6">
                            <span className="text-white block mb-2">OUR</span>
                            <span className="text-[var(--primary)] block mb-2">SIGNATURE</span>
                            <span className="text-white block relative inline-block">
                                WINGS
                                <div className="absolute -bottom-3 left-0 w-full h-[3px] bg-red-600 rounded-full" aria-hidden="true"></div>
                            </span>
                        </h2>
                        
                        <p className="body-text mt-8 mb-10 max-w-sm">
                            Hand-tossed in our signature sauces and cooked to perfection for that ultimate crunch.
                        </p>
                        
                        <button className="btn btn-outline-primary btn-lg">
                            VIEW FULL MENU 
                            <div className="icon-arrow-right text-lg" aria-hidden="true"></div>
                        </button>
                    </div>
                    
                    {/* Right Column - Slider */}
                    <div className="w-full lg:w-[65%] relative group">
                        
                        {/* Custom Navigation Arrows */}
                        <button 
                            onClick={() => scroll('left')} 
                            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 w-12 h-12 rounded-full border-2 border-[var(--primary)] bg-black items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-black"
                            aria-label="Previous items"
                        >
                            <div className="icon-chevron-left text-2xl" aria-hidden="true"></div>
                        </button>
                        
                        <button 
                            onClick={() => scroll('right')} 
                            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 w-12 h-12 rounded-full border-2 border-[var(--primary)] bg-black items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-black"
                            aria-label="Next items"
                        >
                            <div className="icon-chevron-right text-2xl" aria-hidden="true"></div>
                        </button>
                        
                        {/* Slider Track */}
                        <div 
                            ref={sliderRef}
                            className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory pb-6 px-2"
                            tabIndex="0"
                            aria-label="Menu slider"
                        >
                            {wings.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="bg-[#111111] rounded-xl border border-white/10 flex-shrink-0 w-[280px] sm:w-[300px] snap-start relative flex flex-col overflow-hidden shadow-lg hover:border-[var(--primary)]/50 transition-colors h-full"
                                >
                                    {item.tag && (
                                        <div className="absolute top-0 left-0 bg-[#d92323] text-white text-[11px] font-bold px-4 py-2 uppercase tracking-widest z-10 rounded-br-lg">
                                            {item.tag}
                                        </div>
                                    )}
                                    
                                    <div className="h-56 w-full relative bg-black/40 p-4 flex items-center justify-center">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                    
                                    <div className="p-8 text-center flex flex-col flex-grow border-t border-white/5">
                                        <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2 tracking-wide">{item.name}</h3>
                                        <span className="text-[var(--primary)] font-bold text-xl mb-4">{item.price}</span>
                                        
                                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed px-2">
                                            {item.desc}
                                        </p>
                                        
                                        {/* Spiciness Indicator */}
                                        <div className="flex items-center justify-center gap-1.5 mt-auto" aria-label={`Spiciness level ${item.spicy} out of 5`}>
                                            {[1, 2, 3, 4, 5].map((level) => (
                                                <div 
                                                    key={level} 
                                                    className={`icon-droplet text-sm ${level <= item.spicy ? 'text-[#d92323] fill-[#d92323]' : 'text-gray-600'}`}
                                                    aria-hidden="true"
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Dots */}
                        <div className="flex justify-center items-center gap-3 mt-6" aria-hidden="true">
                            <div className="w-8 h-1.5 bg-[var(--primary)] rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
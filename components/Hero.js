function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 lg:pt-24 lg:pb-10 relative overflow-hidden bg-black" data-name="hero" data-file="components/Hero.js">
            <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <h1 className="heading-1 mb-4">
                        Why do people
                        <br />
                        <span className="text-[var(--primary)]">keep coming<br/>back?</span>
                    </h1>
                    <p className="font-heading text-2xl lg:text-3xl italic text-gray-200 mb-6">
                        Find out with every bite.
                    </p>
                    
                    <div className="w-24 h-1.5 bg-red-600 mb-8 rounded-full" aria-hidden="true"></div>
                    
                    <p className="body-text mb-10 max-w-lg">
                        Hand-tossed wings. Signature sauces.<br />
                        Bold flavors that hit different.<br />
                        It's not just wings. It's a vibe.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
                        <button className="btn btn-primary btn-lg w-full sm:w-auto">
                            Order Now
                            <div className="icon-arrow-right" aria-hidden="true"></div>
                        </button>
                        <a href="#menu" className="btn btn-outline btn-lg w-full sm:w-auto text-center">
                            View Menu
                            <div className="icon-arrow-right" aria-hidden="true"></div>
                        </a>
                    </div>

                    <div>
                        <p className="font-heading text-white font-bold text-sm uppercase tracking-widest mb-6">Order on your favorite app</p>
                        <div className="flex items-center gap-6 lg:gap-8">
                            <img src="../assets/images/e6f27ff4-f1e0-48d1-b6ca-67cb0750739b.png" alt="Delivery App 1" className="h-10 lg:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded" tabIndex="0" />
                            <img src="../assets/images/6359ed39-87f1-4cf9-9b92-75244fb9bc4d.png" alt="Delivery App 2" className="h-10 lg:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded" tabIndex="0" />
                            <img src="../assets/images/e981a856-a8cc-466e-9664-115784e467e6.png" alt="Delivery App 3" className="h-10 lg:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded" tabIndex="0" />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="relative w-full flex items-center justify-center">
                        <img 
                            src="../assets/images/ae7e1e11-c330-489f-b47d-6e959cb6391e.png" 
                            alt="Delicious chicken wings combo" 
                            className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl scale-100 sm:scale-110 lg:scale-125 origin-center transform lg:translate-x-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
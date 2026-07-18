function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-[var(--bg-dark)]/95 backdrop-blur border-b border-white/10" data-name="header" data-file="components/Header.js">
            <div className="container-custom h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded" tabIndex="0">
                    <img src="../assets/images/5abbbc1d-699e-447b-98fa-98cf5e81c0ed.png" alt="The Wings Bistro Logo" className="h-16 object-contain" />
                </div>

                <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
                    {['Home', 'Menu', 'Locations','Franchise','Careers', 'Contact'].map(item => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[0.8rem] font-bold tracking-widest text-gray-300 hover:text-[var(--primary)] transition-colors uppercase focus-visible:outline-none focus-visible:text-[var(--primary)]">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="icon-phone text-[var(--primary)] text-xl shrink-0" aria-hidden="true"></div>
                        <div className="flex flex-col text-right">
                            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Call to order</span>
                            <span className="text-sm font-bold text-white">+1 (647) 123-4567</span>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-md">
                        Order Now
                        <div className="icon-arrow-right" aria-hidden="true"></div>
                    </button>
                </div>
                
                <button className="lg:hidden text-white hover:text-[var(--primary)] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded" aria-label="Toggle menu">
                    <div className="icon-menu text-3xl" aria-hidden="true"></div>
                </button>
            </div>
        </header>
    );
}
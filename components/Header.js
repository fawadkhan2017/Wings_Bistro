const { useState } = React;

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        'Home',
        'Menu',
        'Locations',
        'Franchise',
        'Careers',
        'Contact'
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-[var(--bg-dark)]/95 backdrop-blur border-b border-white/10">
            <div className="container-custom h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="../assets/images/5abbbc1d-699e-447b-98fa-98cf5e81c0ed.png"
                        alt="The Wings Bistro"
                        className="h-16 object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[0.8rem] font-bold tracking-widest text-gray-300 hover:text-[var(--primary)] uppercase transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Desktop Right */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="icon-phone text-[var(--primary)] text-xl"></div>

                        <div className="text-right">
                            <p className="text-xs uppercase tracking-wider text-gray-400">
                                Call to Order
                            </p>

                            <p className="text-white font-bold">
                                +1 (647) 123-4567
                            </p>
                        </div>
                    </div>

                    <button className="btn btn-primary">
                        Order Now
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white"
                >
                    <div
                        className={
                            menuOpen
                                ? "icon-x text-3xl"
                                : "icon-menu text-3xl"
                        }
                    ></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-[#111827] border-t border-white/10">
                    <nav className="flex flex-col py-5">

                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="px-6 py-4 text-white border-b border-white/10 hover:bg-[var(--primary)] transition"
                            >
                                {item}
                            </a>
                        ))}

                        <div className="px-6 pt-5">
                            <button className="btn btn-primary w-full">
                                Order Now
                            </button>
                        </div>

                    </nav>
                </div>
            )}
        </header>
    );
}
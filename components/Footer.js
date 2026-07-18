function Footer() {
    return (
        <footer
            className="bg-[#050505] pt-16 pb-8 border-t border-white/5"
            data-name="footer"
            data-file="components/Footer.js"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-12 mb-12">

                    {/* ================= Brand ================= */}
                    <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">

                        <div className="mb-6">
                            <img
                                src="../assets/images/5abbbc1d-699e-447b-98fa-98cf5e81c0ed.png"
                                alt="The Wings Bistro Logo"
                                className="h-16 object-contain mx-auto lg:mx-0"
                            />
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Bold flavor. Real crunch.
                            <br />
                            The taste that brings you back.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start gap-5">
                            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">
                            <i className="fa-brands fa-facebook-f text-xl"></i>
                            </a>

                            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">
                            <i className="fa-brands fa-instagram text-xl"></i>
                            </a>

                            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>

                            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">
                                <div className="icon-youtube text-xl"></div>
                            </a>
                        </div>
                    </div>

                    {/* ================= Links ================= */}
                    <div className="lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-heading font-bold text-[var(--primary)] text-sm uppercase mb-4 tracking-wide">
                                QUICK LINKS
                            </h4>

                            <ul className="space-y-2 text-gray-300 text-[13px]">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Franchise</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Menu */}
                        <div className="lg:border-l lg:border-white/5 lg:pl-8">
                            <h4 className="font-heading font-bold text-[var(--primary)] text-sm uppercase mb-4 tracking-wide">
                                MENU
                            </h4>

                            <ul className="space-y-2 text-gray-300 text-[13px]">
                                <li><a href="#" className="hover:text-white transition-colors">Wings</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Combos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sides</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Drinks</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sauces</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="lg:border-l lg:border-white/5 lg:pl-8">
                            <h4 className="font-heading font-bold text-[var(--primary)] text-sm uppercase mb-4 tracking-wide">
                                COMPANY
                            </h4>

                            <ul className="space-y-2 text-gray-300 text-[13px]">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Franchise</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:border-l lg:border-white/5 lg:pl-8">
                            <h4 className="font-heading font-bold text-[var(--primary)] text-sm uppercase mb-4 tracking-wide">
                                CONTACT US
                            </h4>

                            <ul className="space-y-4 text-gray-300 text-[13px]">
                                <li className="flex items-center gap-3">
                                    <div className="icon-phone text-white text-base"></div>
                                    <span>+1 (647) 123-4567</span>
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="icon-mail text-white text-base"></div>
                                    <span>info@thewingsbistro.com</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="icon-clock text-white text-base mt-0.5"></div>
                                    <span>Mon - Sun: 11:00 AM - 11:00 PM</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* ================= Copyright ================= */}
                <div className="border-t border-white/5 pt-6">
                    <p className="text-center text-gray-400 text-xs">
                        © 2026 The Wings Bistro. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
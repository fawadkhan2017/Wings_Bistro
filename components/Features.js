function Features() {
    const features = [
        { img: 'https://app.trickle.so/storage/public/images/usr_21df2e6c18000001/82dc57e0-3c69-4bca-babb-86f3830d9b8d.png', title: 'NEVER FROZEN', desc: 'Premium quality wings' },
        { img: 'https://app.trickle.so/storage/public/images/usr_21df2e6c18000001/8fe0bdd0-aaf8-4339-9996-3c3aeacec5f7.png', title: 'FRESHLY PREPARED', desc: 'Cooked to order' },
        { img: 'https://app.trickle.so/storage/public/images/usr_21df2e6c18000001/20aade82-bbdb-46a9-8e09-e7fc65b74d7b.png', title: 'SIGNATURE SAUCES', desc: 'Made in-house' },
        { img: 'https://app.trickle.so/storage/public/images/usr_21df2e6c18000001/46bba924-7672-47fb-b685-29aed0baa522.png', title: 'MADE WITH PASSION', desc: 'Great food deserves care' },
        { img: 'https://app.trickle.so/storage/public/images/usr_21df2e6c18000001/ec6acda4-2daa-4acf-a82a-6242a101aa50.png', title: 'FAST DELIVERY', desc: 'Hot at your door' },
    ];

    return (
        <section className="bg-[var(--surface)] border-y border-white/5 py-10" data-name="features" data-file="components/Features.js">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-2 focus-visible:outline-none" tabIndex="0">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-5 shrink-0 group cursor-default">
                            <div className="w-14 h-14 rounded-full border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 bg-[var(--primary)]/10 p-3 group-hover:bg-[var(--primary)]/20 transition-colors">
                                <img src={feature.img} alt={feature.title} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-heading font-bold text-sm tracking-wider text-white mb-1">{feature.title}</h4>
                                <p className="text-xs text-[var(--text-muted)] font-medium">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}